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

	if (document.querySelector('#custom_footer_footer')) return;

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

	// Footer column links
	var campuses = ['<a href="//ce.bergen.edu">Paramus, NJ Campus</a>'];
	var col_1 = [
		'<a href="//ce.bergen.edu">Library</a>',
		'<a href="//ce.bergen.edu">Course Catalog</a>',
		'<a href="//ce.bergen.edu">Academic Calendar</a>',
		'<a href="//ce.bergen.edu">Faculty Directory</a>',
		'<a href="//ce.bergen.edu">Registration</a>'
	];
	var col_2 = [
		'<a href="//ce.bergen.edu">Career Services</a>',
		'<a href="//ce.bergen.edu">Alumni Association</a>',
		'<a href="//ce.bergen.edu">Financial Aid</a>',
		'<a href="//ce.bergen.edu">Giving to Bergen</a>',
		'<a href="//ce.bergen.edu">Scholarships</a>'
	];
	var col_3 = [
		'<a href="//ce.bergen.edu">Continuing Education</a>',
		'<a href="//ce.bergen.edu">Workforce Development</a>',
		'<a href="//ce.bergen.edu">Athletics</a>',
		'<a href="//ce.bergen.edu">Student Life</a>',
		'<a href="//ce.bergen.edu">International Education</a>'
	];
	var col_4 = [
		'<a href="//ce.bergen.edu">Working at Bergen</a>',
		'<a href="//ce.bergen.edu">Board of Trustees</a>',
		'<a href="//ce.bergen.edu">Accreditation</a>',
		'<a href="//ce.bergen.edu">Consumer Information</a>'
	];

	var info_links = [];
	var legal_links = [emergency_link, directory_link, title_ix_link, military_link, privacy_link, terms_link];
	var footer_address = '400 Paramus Road<br>Paramus, NJ 07652';

	info_links  = info_links.filter(Boolean);
	legal_links = legal_links.filter(Boolean);

	if (info_links.length < 2) {
		legal_links = info_links.concat(legal_links);
		info_links  = [];
	}

	// ── Footer host ──────────────────────────────────────────────────────────
	var footer_host = document.createElement('div');
	footer_host.style.cssText = 'clear: both;';

	var footer_style = document.createElement('style');
	footer_style.textContent =
		'#custom_footer_footer { line-height: 1.35; font-size: 0.8rem; }' +
		'#custom_footer_footer .custom_footer_icon { fill: currentColor; width: 1em; }' +
		'#custom_footer_footer .custom_footer_sep { opacity: 0.5; }' +
		'#custom_footer_footer a {' +
		'  text-decoration: none; font-weight: 700; color: #e8e8e8; display: inline-block;' +
		'  text-decoration-line: underline; text-decoration-color: transparent;' +
		'  text-underline-offset: 0.2rem; text-decoration-thickness: 2px;' +
		'}' +
		'#custom_footer_footer a:hover, #custom_footer_footer a:focus-visible {' +
		'  color: #ffcb09; text-decoration-line: underline; text-decoration-color: #0062bd;' +
		'}' +
		'.custom_footer_container { max-width: ' + container_width + '; padding: 0 ' + container_padding + '; margin: auto; }' +
		'#custom_footer_links { background-color: #172e6d; color: #a5a5a5; }' +
		'#custom_footer_toggle {' +
		'  display: flex; position: relative; z-index: 0; width: 100%; align-items: center;' +
		'  gap: 15px; font-size: 1.25em; font-family: inherit; justify-content: center;' +
		'  font-weight: normal; padding: 20px 15px; background: rgba(0,0,0,.1);' +
		'  border: 0; color: #d6d6d6; cursor: pointer;' +
		'}' +
		'#custom_footer_toggle::before, #custom_footer_toggle::after {' +
		'  display: block; content: ""; height: 5px; flex: 1; max-width: 200px; background: #03539e;' +
		'}' +
		'#custom_footer_toggle:hover::before, #custom_footer_toggle:focus::before,' +
		'#custom_footer_toggle:hover::after,  #custom_footer_toggle:focus::after { background: #ffcb06; }' +
		'#custom_footer_toggle[aria-expanded="true"]  .custom_footer_icon.down,' +
		'#custom_footer_toggle[aria-expanded="false"] .custom_footer_icon.up { display: none; }' +
		'#custom_footer_toggle:not([aria-expanded="true"]) ~ #custom_footer_expandable { display: none; }' +
		'#custom_footer_button_text { display: flex; gap: 0.5rem; }' +
		'#custom_footer_expandable {' +
		'  display: grid; grid-template-columns: 1fr 2px 1fr; grid-auto-rows: auto 2px;' +
		'  gap: 1rem; text-align: center; padding-top: 30px; padding-bottom: 30px;' +
		'}' +
		'#custom_footer_expandable hr { background-color: #27519f; border-style: none; margin: 0; padding: 0; height: auto; width: auto; }' +
		'@media (max-width: 699px) {' +
		'  #custom_footer_expandable > *:nth-child(3), #custom_footer_expandable > *:nth-child(4) { display: none; }' +
		'  #custom_footer_expandable > *:nth-child(6), #custom_footer_expandable > *:nth-child(7), #custom_footer_expandable > *:nth-child(8) { grid-column: 1 / -1; }' +
		'}' +
		'@media (min-width: 700px) and (max-width: 999px) {' +
		'  #custom_footer_expandable { grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr; }' +
		'  #custom_footer_expandable > ul { grid-column: span 3; }' +
		'  #custom_footer_expandable > hr:nth-child(6) { grid-column: 1 / -1; }' +
		'  #custom_footer_expandable > ul:nth-child(9) { grid-column: 3 / 6; }' +
		'  #custom_footer_expandable > *:nth-child(7), #custom_footer_expandable > *:nth-child(8) { display: none; }' +
		'}' +
		'@media (min-width: 1000px) {' +
		'  #custom_footer_expandable { grid-template-columns: 1fr 2px 1fr 2px 1.25fr 2px 1fr 2px 1fr; }' +
		'  #custom_footer_expandable > *:nth-child(3), #custom_footer_expandable > *:nth-child(4) { display: none; }' +
		'}' +
		'#custom_footer_links ul { list-style: none; margin: 0; padding: 0; align-self: center; }' +
		'#custom_footer_links li { padding: 7px 0; }' +
		'#custom_footer_copyright_row { background-color: #000e2e; color: #fff; padding: 20px 30px; text-align: center; }' +
		'#custom_footer_copyright_row a { color: #ffcb06; }' +
		'#custom_footer_copyright_row a:hover, #custom_footer_copyright_row a:focus-visible { color: #fff; }' +
		'#custom_footer_copyright_row > * { margin: 1.5rem 0; }' +
		'#custom_footer_copyright_row ul { list-style: none; display: flex; justify-content: center; flex-wrap: wrap; gap: 0.375rem 0.7rem; padding: 0; }' +
		'#custom_footer_logo_row { display: grid; gap: 1.2rem 20px; grid-auto-flow: dense; align-items: center; }' +
		'#custom_footer_logo_row p { margin: 0; }' +
		'#custom_footer_logo a { color: #fff; }' +
		'#custom_footer_logo a:hover, #custom_footer_logo a:focus-visible { color: #b3b3b3; }' +
		'#custom_footer_logo .custom_footer_icon { width: 70px; }' +
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
		'#custom_footer_social .custom_footer_icon { width: 1.6em; height: 1.6em; margin: 0.7em; }' +
		'#custom_footer_social a { color: #cecece; border-radius: 0.3rem; }' +
		'#custom_footer_social a:hover, #custom_footer_social a:focus-visible { color: #ffcb06; background-color: #011b40; }';

	footer_host.appendChild(footer_style);

	var footer_div = document.createElement('div');
	footer_div.innerHTML =
		'<footer id="custom_footer_footer" aria-label="Legal details and links to other Bergen Community College websites">' +
		'  <div id="custom_footer_links">' +
		'    <button id="custom_footer_toggle" type="button" aria-controls="custom_footer_expandable" aria-expanded="false">' +
		'      <div id="custom_footer_button_text">' +
		'        College Links' +
		'        <svg class="custom_footer_icon down" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>' +
		'        <svg class="custom_footer_icon up"   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>' +
		'      </div>' +
		'    </button>' +
		'    <div id="custom_footer_expandable" class="custom_footer_container">' +
		      list(col_1) + '<hr>' +
		      list(campuses, 'Bergen Community College Campuses') + '<hr>' +
		      list(col_2) + '<hr>' +
		      list(campuses, 'Bergen Community College Campuses') + '<hr>' +
		      list(col_3) + '<hr>' +
		      list(col_4) +
		'    </div>' +
		'  </div>' +
		'  <div id="custom_footer_copyright_row">' +
		'    <div id="custom_footer_logo_row">' +
		'      <p id="custom_footer_logo"><a href="//ce.bergen.edu">Bergen Community College<br>ce.bergen.edu</a></p>' +
		'      <p id="custom_footer_offices">Admin Offices: ' + footer_address + '</p>' +
		'      <p id="custom_footer_copyright">&copy; Bergen Community College.<br>All rights reserved.</p>' +
		'    </div>' +
		    list(legal_links, null, separator) +
		    list(info_links,  null, separator) +
		'    <ul id="custom_footer_social" aria-label="Bergen Community College Social Media Pages">' +
		'      <li><a href="//ce.bergen.edu" aria-label="Facebook"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="X"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="YouTube"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></a></li>' +
		'      <li><a href="//ce.bergen.edu" aria-label="LinkedIn"><svg class="custom_footer_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></li>' +
		'    </ul>' +
		'  </div>' +
		'</footer>';

	footer_host.appendChild(footer_div);

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', inject);
	} else {
		inject();
	}

	function list(links, label, sep) {
		if (!links || !links.length) return '';
		var html = '';
		for (var i = 0; i < links.length; i++) {
			if (i !== 0 && sep != null) {
				html += '<span class="custom_footer_sep" aria-hidden="true">' + sep + '</span>';
			}
			html += '<li>' + links[i] + '</li>';
		}
		return '<ul' + (label ? ' aria-label="' + label + '"' : '') + '>' + html + '</ul>';
	}

	function inject() {
		if (!footer_placement) {
			document.body.appendChild(footer_host);
			return;
		}
		var parts = footer_placement.split(' ');
		var loc   = parts[parts.length - 1];
		var pos   = parts.length > 1 ? parts[0] : 'after';
		var el    = document.getElementById(loc);
		if (!el) { document.body.appendChild(footer_host); return; }
		switch (pos) {
			case 'before':  el.parentNode.insertBefore(footer_host, el); break;
			case 'prepend': el.insertBefore(footer_host, el.firstChild); break;
			case 'append':  el.appendChild(footer_host); break;
			default:        el.parentNode.insertBefore(footer_host, el.nextSibling);
		}

		var toggle = document.getElementById('custom_footer_toggle');
		var expandable = document.getElementById('custom_footer_expandable');
		if (toggle) toggle.addEventListener('click', function () {
			var expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
			if (!expanded && expandable) expandable.querySelector('a').focus();
		});
		if (expandable) expandable.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') {
				toggle.setAttribute('aria-expanded', 'false');
				toggle.focus();
			}
		});
	}

})();
