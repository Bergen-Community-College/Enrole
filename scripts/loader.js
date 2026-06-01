// Script and CSS manifest. Edit this file to add or remove assets —
// it is always fetched at a pinned SHA so no CDN purge is ever needed.
(function () {
	var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';

	var scripts = [
		'nav.js',
		'footer.js',
		'sidebar-menu.js',
		'category-loader.js',
		'utils.js',
		'register.js'
	];

	var cssFiles = [
		'style.css'
	];

	if (isLocal) {
		loadAll('./scripts/', './');
		return;
	}

	// style.js already resolved the SHA and cached it before loading this file
	var sha = 'main';
	try {
		var cached = JSON.parse(localStorage.getItem('cf_jsdelivr_sha'));
		if (cached && cached.sha) sha = cached.sha;
	} catch (e) {}

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
