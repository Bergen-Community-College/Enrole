(function () {
	var tag = document.getElementById('bergen-wrapper-script') || document.createElement('div');

	if (tag.getAttribute('hide-header')) return;

	var container_width   = tag.getAttribute('container-width')   || '1140px';
	var container_padding = tag.getAttribute('container-padding') || '30px';
	var show_give         = tag.getAttribute('show-give');
	var show_portal       = tag.getAttribute('show-portal');
	var header_placement  = tag.getAttribute('header-placement');

	var host = document.createElement('div');
	host.style.cssText = 'clear: both;';

	var style = document.createElement('style');
	style.textContent =
		'#custom_footer_topbar { display: none; }' +
		'@media only screen and (min-width: 768px) {' +
		'  #custom_footer_topbar {' +
		'    display: block; position: relative; z-index: 2;' +
		'    font-family: Roboto, Arial, sans-serif; font-size: 0.8rem;' +
		'    padding: 12px ' + container_padding + '; background: #002a50;' +
		'  }' +
		'  #custom_footer_topbar ul {' +
		'    display: flex; justify-content: flex-end; gap: 1.25rem;' +
		'    list-style: none; margin: 0 auto; padding: 0; max-width: ' + container_width + ';' +
		'  }' +
		'  #custom_footer_topbar a { color: #fff; font-weight: bold; text-decoration: none; }' +
		'  #custom_footer_topbar a:hover, #custom_footer_topbar a:focus-visible { color: #8cddff; text-decoration: underline; }' +
		'}';
	host.appendChild(style);

	var div = document.createElement('div');
	div.innerHTML =
		'<div id="custom_footer_topbar"><ul>' +
		(show_give   ? '<li><a href="//ce.bergen.edu"><span>Give to Bergen</span></a></li>' : '') +
		(show_portal ? '<li><a href="//ce.bergen.edu"><span>Student Portal</span></a></li>' : '') +
		'<li><a href="//ce.bergen.edu"><span>Bergen Community College Home</span></a></li>' +
		'</ul></div>';
	host.appendChild(div);

	function inject() {
		if (!header_placement) {
			document.body.insertBefore(host, document.body.firstChild);
			return;
		}
		var parts = header_placement.split(' ');
		var loc = parts[parts.length - 1];
		var pos = parts.length > 1 ? parts[0] : 'before';
		var el = document.getElementById(loc);
		if (!el) { document.body.insertBefore(host, document.body.firstChild); return; }
		switch (pos) {
			case 'prepend': el.insertBefore(host, el.firstChild); break;
			case 'append':  el.appendChild(host); break;
			default:        el.parentNode.insertBefore(host, el);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', inject);
	} else {
		inject();
	}
})();
