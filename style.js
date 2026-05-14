// Polyfills
if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function(search, rawPos) {
			pos = rawPos > 0 ? rawPos|0 : 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

// Load scripts
(function () {
	var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
	var base = isLocal ? './scripts/' : 'http://104.237.145.33/scripts/';
	var scripts = [
		// 'nav.js',
		// 'topbar.js',
		'footer.js',
		// 'sidebar-menu.js',
		// 'category-loader.js',
		// 'utils.js'

	];
	var cssFiles = [
		'style.css',
		// 'style2.css'
	];

	var v = Date.now();
	cssFiles.forEach(function (href) {
		var l = document.createElement('link');
		l.rel = 'stylesheet';
		l.href = base.replace('scripts/', '') + href + '?v=' + v;
		document.head.appendChild(l);
	});
	scripts.forEach(function (src) {
		var s = document.createElement('script');
		s.src = base + src + '?v=' + v;
		document.head.appendChild(s);
	});
})();
