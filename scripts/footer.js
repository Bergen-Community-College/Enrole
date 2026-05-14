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
		container_width   = tag.getAttribute('container-width')   || '1140px',
		container_padding = tag.getAttribute('container-padding') || '30px',
		emergency_link    = tag.getAttribute('emergency-link') || '<a href="//ce.bergen.edu">Emergency Info</a>',
		directory_link    = tag.getAttribute('directory-link') || '<a href="//ce.bergen.edu">Directory</a>',
		title_ix_link     = tag.getAttribute('title-ix-link')  || '<a href="//ce.bergen.edu">Civil Rights Equity & Title IX</a>',
		military_link     = tag.getAttribute('military-link')  || '<a href="//ce.bergen.edu">Military Disclaimer</a>',
		privacy_link      = tag.getAttribute('privacy-link')   || '<a href="//ce.bergen.edu">Privacy Statement & GDPR</a>',
		terms_link        = tag.getAttribute('terms-link')     || '<a href="//ce.bergen.edu">Terms of Use & Accessibility</a>',
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

	var legal_links = [emergency_link, directory_link, title_ix_link, military_link, privacy_link, terms_link];

	// ── Footer host ──────────────────────────────────────────────────────────
	var footer_host = document.createElement('div');
	footer_host.style.cssText = 'clear: both;';

	var footer_style = document.createElement('style');
	footer_style.textContent =
		'#custom_footer_footer { line-height: 1.35; font-size: 0.8rem; }' +
		'#custom_footer_footer a {' +
		'  text-decoration: none; font-weight: 700; color: #e8e8e8; display: inline-block;' +
		'  text-decoration-line: underline; text-decoration-color: transparent;' +
		'  text-underline-offset: 0.2rem; text-decoration-thickness: 2px;' +
		'}' +
		'#custom_footer_footer a:hover, #custom_footer_footer a:focus-visible {' +
		'  color: #ffcb09; text-decoration-line: underline; text-decoration-color: #0062bd;' +
		'}' +
		'.custom_footer_container { max-width: ' + container_width + '; padding: 0 ' + container_padding + '; margin: auto; }' +
		'#custom_footer_links { background-color: #172e6d; color: #a5a5a5; padding: 30px 0; }' +
		'#custom_footer_columns {' +
		'  display: flex; gap: 0; align-items: flex-start;' +
		'}' +
		'.custom_footer_col {' +
		'  flex: 1; padding: 0 20px;' +
		'}' +
		'.custom_footer_col h3 {' +
		'  color: #fff; font-size: 0.85rem; font-weight: 700; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;' +
		'}' +
		'.custom_footer_col address {' +
		'  font-style: normal; color: #a5a5a5; margin-bottom: 4px;' +
		'}' +
		'.custom_footer_col .cf_phone { color: #a5a5a5; margin: 4px 0; }' +
		'.custom_footer_divider {' +
		'  width: 2px; background: #27519f; align-self: stretch; flex: 0 0 2px; margin: 0 10px;' +
		'}' +
		'#custom_footer_links ul { list-style: none; margin: 0; padding: 0; }' +
		'#custom_footer_links li { padding: 5px 0; }' +
		'@media (max-width: 699px) {' +
		'  #custom_footer_columns { flex-direction: column; }' +
		'  .custom_footer_divider { width: auto; height: 2px; flex: 0 0 2px; margin: 15px 0; align-self: stretch; }' +
		'}' +
		'#custom_footer_copyright_row { background-color: #000e2e; color: #fff; padding: 20px 30px; text-align: center; }' +
		'#custom_footer_copyright_row a { color: #ffcb06; }' +
		'#custom_footer_copyright_row a:hover, #custom_footer_copyright_row a:focus-visible { color: #fff; }' +
		'#custom_footer_copyright_row > * { margin: 1.5rem 0; }' +
		'#custom_footer_copyright_row ul { list-style: none; display: flex; justify-content: center; flex-wrap: wrap; gap: 0.375rem 0.7rem; padding: 0; }' +
		'#custom_footer_logo_row { display: grid; gap: 1.2rem 20px; grid-auto-flow: dense; align-items: center; }' +
		'#custom_footer_logo_row p { margin: 0; }' +
		'#custom_footer_logo a { color: #fff; }' +
		'#custom_footer_logo a:hover, #custom_footer_logo a:focus-visible { color: #b3b3b3; }' +
		'@media (min-width: 530px) { #custom_footer_offices { text-align: right; } #custom_footer_copyright { text-align: left; } }' +
		'@media (min-width: 530px) and (max-width: 827px) {' +
		'  #custom_footer_logo_row { grid-template-columns: 1fr 1fr; }' +
		'  #custom_footer_logo { grid-column: 1 / -1; }' +
		'}' +
		'@media (min-width: 828px) {' +
		'  #custom_footer_logo_row { gap: 1.5rem 30px; grid-template-columns: 1fr auto 1fr; }' +
		'  #custom_footer_logo { grid-column: 2; }' +
		'}' +
		'ul#custom_footer_social { gap: 0.2rem; line-height: 0; }' +
		'#custom_footer_social .custom_footer_icon { width: 1.6em; height: 1.6em; margin: 0.7em; fill: currentColor; }' +
		'#custom_footer_social a { color: #cecece; border-radius: 0.3rem; }' +
		'#custom_footer_social a:hover, #custom_footer_social a:focus-visible { color: #ffcb06; background-color: #011b40; }';

	footer_host.appendChild(footer_style);

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

	function list(links, label, sep) {
		if (!links || !links.length) return '';
		var html = '';
		for (var i = 0; i < links.length; i++) {
			if (i !== 0 && sep != null) {
				html += '<span style="opacity:0.5" aria-hidden="true">' + sep + '</span>';
			}
			html += '<li>' + links[i] + '</li>';
		}
		return '<ul' + (label ? ' aria-label="' + label + '"' : '') + '>' + html + '</ul>';
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
		'  <div id="custom_footer_copyright_row">' +
		'    <div id="custom_footer_logo_row">' +
		'      <p id="custom_footer_logo"><a href="//ce.bergen.edu">Bergen Community College<br>ce.bergen.edu</a></p>' +
		'      <p id="custom_footer_offices">Admin Offices: 400 Paramus Road<br>Paramus, NJ 07652</p>' +
		'      <p id="custom_footer_copyright">&copy; Bergen Community College.<br>All rights reserved.</p>' +
		'    </div>' +
		    list(legal_links, null, separator) +
		'    <ul id="custom_footer_social" aria-label="Bergen Community College Social Media">' +
		'      <li><a href="//ce.bergen.edu" aria-label="Facebook"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="X"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="YouTube"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="LinkedIn"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></li>' +
		'    </ul>' +
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
