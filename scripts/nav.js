(function () {
	function init() {
		document.querySelector('#header_title a').setAttribute('href', 'https://ce.bergen.edu');

		var breadcrumbs = document.getElementById('breadcrumbTop');
		var topBar = document.getElementById('topBar');
		breadcrumbs.className = '';
		topBar.className = 'desktop-only';

		if (breadcrumbs.children.length > 1) {
			breadcrumbs.style.visibility = 'visible';
		} else {
			topBar.remove();
		}

		if (typeof jQuery !== 'undefined') {
			jQuery('td.tableheading:contains(Schedule:)').next('td:contains(Self-paced)').closest('table').find('td.tableheading:contains(Times:)').closest('tr').css('display', 'none');
		}

		if (location.pathname.startsWith('/testcebergen/')) {
			var test_links = document.querySelectorAll('a[data-test-href]');
			for (var i = test_links.length - 1; i >= 0; i--) {
				test_links[i].setAttribute('href', test_links[i].getAttribute('data-test-href'));
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
