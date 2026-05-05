import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import csv
import time
from collections import deque

BASE_URL = 'https://bergen.edu/ce'
SCOPE_NETLOC = ('bergen.edu', 'www.bergen.edu')
SCOPE_PATH_PREFIX = '/ce'
DELAY = 0.5  # seconds between requests


def normalize(url):
    p = urlparse(url)
    return p._replace(fragment='').geturl().rstrip('/')


def in_scope(url):
    p = urlparse(url)
    return (
        p.scheme in ('http', 'https') and
        p.netloc.lstrip('www.') in [n.lstrip('www.') for n in SCOPE_NETLOC] and
        p.path.startswith(SCOPE_PATH_PREFIX)
    )


def scrape():
    visited = set()
    queue = deque([normalize(BASE_URL)])
    pages = []   # (url, title)
    links = []   # (source_page, link_url, link_text)

    session = requests.Session()
    session.headers['User-Agent'] = 'Mozilla/5.0 (Bergen CE Migration Scraper)'

    while queue:
        url = queue.popleft()
        if url in visited:
            continue
        visited.add(url)

        print(f'[{len(visited)}] {url}')

        try:
            resp = session.get(url, timeout=15, allow_redirects=True)
            resp.raise_for_status()
        except Exception as e:
            print(f'    ERROR: {e}')
            continue

        if 'text/html' not in resp.headers.get('Content-Type', ''):
            continue

        soup = BeautifulSoup(resp.text, 'html.parser')
        title = soup.title.string.strip() if soup.title and soup.title.string else ''
        pages.append((url, title))

        for a in soup.find_all('a', href=True):
            href = a['href'].strip()
            if not href or href.startswith(('mailto:', 'tel:', 'javascript:')):
                continue

            abs_url = normalize(urljoin(url, href))
            link_text = a.get_text(separator=' ', strip=True)
            links.append((url, abs_url, link_text))

            if in_scope(abs_url) and abs_url not in visited:
                queue.append(abs_url)

        time.sleep(DELAY)

    # Write pages.csv
    with open('pages.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['url', 'title'])
        w.writerows(pages)

    # Write links.csv
    with open('links.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['source_page', 'link_url', 'link_text'])
        w.writerows(links)

    print(f'\nDone. {len(pages)} pages, {len(links)} links.')
    print('Saved: pages.csv, links.csv')


if __name__ == '__main__':
    scrape()
