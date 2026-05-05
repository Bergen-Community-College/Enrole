import requests
from bs4 import BeautifulSoup
import csv
import os
import re
import time

PAGES_CSV = 'pages.csv'
OUTPUT_DIR = os.path.join('..', 'scripts', 'pages')
DELAY = 0.5

JS_TEMPLATE = """\
(function () {{
\tfunction injectCards() {{
\t\tvar container = document.querySelector('.cardContainer');
\t\tif (!container) return;

\t\tcontainer.innerHTML = `{html}`;
\t}}

\tif (document.readyState === 'loading') {{
\t\tdocument.addEventListener('DOMContentLoaded', injectCards);
\t}} else {{
\t\tinjectCards();
\t}}
}})();
"""


def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    return text.strip('-') or 'untitled'


def escape_template_literal(html):
    html = html.replace('\\', '\\\\')
    html = html.replace('`', '\\`')
    html = html.replace('${', '\\${')
    return html


def unique_filename(base_dir, slug):
    path = os.path.join(base_dir, slug + '.js')
    if not os.path.exists(path):
        return path
    i = 2
    while os.path.exists(os.path.join(base_dir, f'{slug}-{i}.js')):
        i += 1
    return os.path.join(base_dir, f'{slug}-{i}.js')


def process():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    session = requests.Session()
    session.headers['User-Agent'] = 'Mozilla/5.0 (Bergen CE Migration)'

    with open(PAGES_CSV, newline='', encoding='utf-8') as f:
        pages = list(csv.DictReader(f))

    print(f'Processing {len(pages)} pages...\n')

    for page in pages:
        url = page['url']
        print(f'Fetching: {url}')

        try:
            resp = session.get(url, timeout=15, allow_redirects=True)
            resp.raise_for_status()
        except Exception as e:
            print(f'  ERROR: {e}\n')
            continue

        final_url = resp.url
        redirected = 'ce.bergen.edu' in final_url

        soup = BeautifulSoup(resp.text, 'html.parser')

        if redirected:
            el = soup.find('article')
            source = f'article (redirected to {final_url})'
        else:
            el = soup.find('div', id='primary')
            source = 'div#primary'

        if not el:
            print(f'  WARNING: Target element not found ({source}), skipping\n')
            continue

        # Page title — strip site name suffix
        raw_title = soup.title.string.strip() if soup.title and soup.title.string else page['title']
        clean_title = re.split(r'\s[|\-–]\s', raw_title)[0].strip()

        slug = slugify(clean_title)
        filepath = unique_filename(OUTPUT_DIR, slug)
        filename = os.path.basename(filepath)

        html = escape_template_literal(str(el))
        js = JS_TEMPLATE.format(html=html)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(js)

        print(f'  -> [{source}] saved as {filename}\n')
        time.sleep(DELAY)

    print('Done.')


if __name__ == '__main__':
    process()
