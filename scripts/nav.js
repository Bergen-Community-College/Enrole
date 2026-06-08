(function () {
	function init() {
		document.querySelector('#header_title a').setAttribute('href', 'index.jsp');

		var headerTitle = document.getElementById('header_title');
		if (headerTitle && !headerTitle.querySelector('.cf_header_subtitle')) {
			var span = document.createElement('span');
			span.className = 'cf_header_subtitle';
			span.textContent = 'CONTINUING EDUCATION AND WORKFORCE DEVELOPMENT';
			headerTitle.appendChild(span);
		}

		var breadcrumbs = document.getElementById('breadcrumbTop');
		breadcrumbs.className = '';
		if (breadcrumbs.children.length > 1) {
			breadcrumbs.style.visibility = 'visible';
		}

		if (typeof jQuery !== 'undefined') {
			jQuery('td.tableheading:contains(Schedule:)').next('td:contains(Self-paced)').closest('table').find('td.tableheading:contains(Times:)').closest('tr').css('display', 'none');
		}

		// if (location.pathname.startsWith('/testcebergen/')) {
		// 	var test_links = document.querySelectorAll('a[data-test-href]');
		// 	for (var i = test_links.length - 1; i >= 0; i--) {
		// 		test_links[i].setAttribute('href', test_links[i].getAttribute('data-test-href'));
		// 	}
		// }
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
