// Polyfills
// =========
if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function(search, rawPos) {
			pos = rawPos > 0 ? rawPos|0 : 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

// Relink header logo to ProEd main website
document.querySelector('#header_title a').setAttribute('href', 'https://proed.erau.edu/');

var breadcrumbs = document.getElementById('breadcrumbTop');

// Move search to left nav
var search = document.getElementById('search');
var popularContainer = document.getElementById('popularContainer');
popularContainer.insertBefore(search, popularContainer.children[0]);
var topBar = document.getElementById('topBar');
// Move desktop-only class from breadCrumbs to topBar
breadcrumbs.className = '';
topBar.className = 'desktop-only';

// Show breadcrumbs only when Home isn't the only link
if (breadcrumbs.children.length > 1) {
	breadcrumbs.style.visibility = 'visible';
} else {
	topBar.remove();
}

// Hide "Times:" row when schedule says "Self-paced" 
if (typeof jQuery !== 'undefined') {
	jQuery('td.tableheading:contains(Schedule:)').next('td:contains(Self-paced)').closest('table').find('td.tableheading:contains(Times:)').closest('tr').css('display', 'none');
}

// Test environment only
// =====================
if (location.pathname.startsWith('/testerau/')) {
	// Replace all test links
	var test_links = document.querySelectorAll('a[data-test-href]');
	for (var i = test_links.length - 1; i >= 0; i--) {
		test_links[i].setAttribute('href', test_links[i].getAttribute('data-test-href'));
	}

}