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

	var scripts = [
		'nav.js',
		'topbar.js',
		'footer.js',
		'sidebar-menu.js',
		'category-loader.js',
		'utils.js'
	];

	var cssFiles = [
		'style.css',
		// 'style2.css'
	];

	if (isLocal) {
		loadAll('./scripts/', './');
		return;
	}

	var CACHE_KEY = 'cf_jsdelivr_sha';
	var CACHE_TTL = 5 * 60 * 1000;

	try {
		var cached = JSON.parse(localStorage.getItem(CACHE_KEY));
		if (cached && (Date.now() - cached.ts) < CACHE_TTL) {
			loadAll(cached.sha);
			return;
		}
	} catch (e) {}

	fetch('https://api.github.com/repos/Bergen-Community-College/Enrole/git/ref/heads/main')
		.then(function (r) { return r.json(); })
		.then(function (data) {
			var sha = data.object.sha.slice(0, 7);
			try { localStorage.setItem(CACHE_KEY, JSON.stringify({ sha: sha, ts: Date.now() })); } catch (e) {}
			loadAll(sha);
		})
		.catch(function () {
			loadAll('main');
		});

	function loadAll(sha) {
		var base = 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@' + sha + '/';
		cssFiles.forEach(function (href) {
			var l = document.createElement('link');
			l.rel = 'stylesheet';
			l.href = base + href;
			document.head.appendChild(l);
		});
		scripts.forEach(function (src) {
			var s = document.createElement('script');
			s.src = base + 'scripts/' + src;
			document.head.appendChild(s);
		});
	}
})();
