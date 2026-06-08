// Script and CSS manifest. Edit this file to add or remove assets —
// it is always fetched at a pinned SHA so no CDN purge is ever needed.
(function () {
	var scripts = [
		'nav.js',
		'footer.js',
		// 'sidebar-menu.js',
		// 'category-loader.js',
		'utils.js',
		//'register.js',
		'subHeader.js'
	];

	var cssFiles = [
		'style.css'
	];

	var sha = window.cf_jsdelivr_sha || 'main';
	var base = 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@' + sha + '/';
	loadAll(base + 'scripts/', base);

	function loadAll(scriptBase, cssBase) {
		cssFiles.forEach(function (href) {
			var l = document.createElement('link');
			l.rel = 'stylesheet';
			l.href = cssBase + href;
			document.head.appendChild(l);
		});
		scripts.forEach(function (src) {
			var s = document.createElement('script');
			s.src = scriptBase + src;
			document.head.appendChild(s);
		});
	}
})();
