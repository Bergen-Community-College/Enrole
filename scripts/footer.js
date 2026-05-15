/*
 * @Description: Bergen Community College footer.
 * @Usage: <script type="text/javascript" src="style.js" id="bergen-wrapper-script"></script>
 * @Attributes:
 * container-width (default: 1140px)
 * container-padding (default: 30px)
 * footer-placement
 * emergency-link, directory-link, title-ix-link, military-link, privacy-link, terms-link
 */

(function () {

	console.log('[footer.js] script loaded');

	if (document.querySelector('#custom_footer_footer')) {
		console.log('[footer.js] already injected, skipping');
		return;
	}

	var tag = document.getElementById('bergen-wrapper-script') || document.createElement('div'),
		footer_placement  = tag.getAttribute('footer-placement'),
		container_width   = tag.getAttribute('container-width')   || '1600px',
		container_padding = tag.getAttribute('container-padding') || '30px',
		separator         = tag.getAttribute('separator')      || '|';

	var campuses = [
		{
			name: 'Paramus Campus',
			address: '400 Paramus Road<br>Paramus, NJ 07652',
			phone: '201-447-4700',
			directions: 'https://maps.google.com/?q=400+Paramus+Road,+Paramus,+NJ+07652'
		},
		{
			name: 'Philip Ciarco Jr. Learning Center',
			address: '355 Main Street<br>Hackensack, NJ 07601',
			phone: '201-489-1551',
			directions: 'https://maps.google.com/?q=355+Main+Street,+Hackensack,+NJ+07601'
		},
		{
			name: 'Meadowlands Campus',
			address: '1280 Wall Street West<br>Lyndhurst, NJ 07071',
			phone: '201-301-9699',
			directions: 'https://maps.google.com/?q=1280+Wall+Street+West,+Lyndhurst,+NJ+07071'
		}
	];

	var resources = [
		'<a href="//ce.bergen.edu">Staff Directory</a>',
		'<a href="//ce.bergen.edu">CE Career Support</a>',
		'<a href="//ce.bergen.edu">Work at Bergen</a>',
		'<a href="//ce.bergen.edu">Propose a Class</a>'
	];

	var staff_links = [
		'<a href="//ce.bergen.edu">Instructor Portal</a>',
		'<a href="//ce.bergen.edu">Staff Login</a>',
		'<a href="//ce.bergen.edu">ADP</a>',
		'<a href="//ce.bergen.edu">Ad Astra</a>'
	];


	// ── Footer host ──────────────────────────────────────────────────────────
	var footer_host = document.createElement('div');
	footer_host.style.cssText = 'clear: both;';

	footer_host.style.setProperty('--cf-container-width', container_width);
	footer_host.style.setProperty('--cf-container-padding', container_padding);

	function campusCol(c) {
		return '<div class="custom_footer_col">' +
			'<h3>' + c.name + '</h3>' +
			'<address>' + c.address + '</address>' +
			'<p class="cf_phone">' + c.phone + '</p>' +
			'<a href="' + c.directions + '" target="_blank" rel="noopener">Directions</a>' +
			'</div>';
	}

	function linkCol(heading, links) {
		var items = '';
		for (var i = 0; i < links.length; i++) items += '<li>' + links[i] + '</li>';
		return '<div class="custom_footer_col"><h3>' + heading + '</h3><ul>' + items + '</ul></div>';
	}

var footer_div = document.createElement('div');
	footer_div.innerHTML =
		'<footer id="custom_footer_footer" aria-label="Bergen Community College footer">' +
		'  <div id="custom_footer_links">' +
		'    <div id="custom_footer_columns" class="custom_footer_container">' +
		      campusCol(campuses[0]) +
		      campusCol(campuses[1]) +
		      campusCol(campuses[2]) +
		'      <div class="custom_footer_divider"></div>' +
		      linkCol('Resources', resources) +
		      linkCol('Staff Links', staff_links) +
		'    </div>' +
		'  </div>' +
		'</footer>';

	footer_host.appendChild(footer_div);

	console.log('[footer.js] readyState:', document.readyState);

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', inject);
	} else {
		inject();
	}

	function inject() {
		console.log('[footer.js] inject() called, footer_placement:', footer_placement);
		if (!footer_placement) {
			document.body.appendChild(footer_host);
			console.log('[footer.js] appended to body');
			return;
		}
		var parts = footer_placement.split(' ');
		var loc   = parts[parts.length - 1];
		var pos   = parts.length > 1 ? parts[0] : 'after';
		var el    = document.getElementById(loc);
		console.log('[footer.js] placement target #' + loc + ':', el);
		if (!el) { document.body.appendChild(footer_host); return; }
		switch (pos) {
			case 'before':  el.parentNode.insertBefore(footer_host, el); break;
			case 'prepend': el.insertBefore(footer_host, el.firstChild); break;
			case 'append':  el.appendChild(footer_host); break;
			default:        el.parentNode.insertBefore(footer_host, el.nextSibling);
		}
		console.log('[footer.js] injected with position "' + pos + '" relative to #' + loc);
	}

})();
