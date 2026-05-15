// Polyfills
if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function(search, rawPos) {
			pos = rawPos > 0 ? rawPos|0 : 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

// Resolve the latest commit SHA, then load loader.js at that SHA.
// This file itself never needs to change — all script/CSS management lives in loader.js.
(function () {
	var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
	var CDN = 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@';
	var CACHE_KEY = 'cf_jsdelivr_sha';
	var CACHE_TTL = 5 * 60 * 1000;

	function loadLoader(sha) {
		var s = document.createElement('script');
		s.src = isLocal ? './scripts/loader.js' : CDN + sha + '/scripts/loader.js';
		document.head.appendChild(s);
	}

	if (isLocal) {
		loadLoader();
		return;
	}

	try {
		var cached = JSON.parse(localStorage.getItem(CACHE_KEY));
		if (cached && (Date.now() - cached.ts) < CACHE_TTL) {
			loadLoader(cached.sha);
			return;
		}
	} catch (e) {}

	fetch('https://api.github.com/repos/Bergen-Community-College/Enrole/git/ref/heads/main')
		.then(function (r) { return r.json(); })
		.then(function (data) {
			var sha = data.object.sha.slice(0, 7);
			try { localStorage.setItem(CACHE_KEY, JSON.stringify({ sha: sha, ts: Date.now() })); } catch (e) {}
			loadLoader(sha);
		})
		.catch(function () {
			// Fall back to stale cache, or 'main' as last resort
			var fallback = 'main';
			try {
				var stale = JSON.parse(localStorage.getItem(CACHE_KEY));
				if (stale && stale.sha) fallback = stale.sha;
			} catch (e) {}
			loadLoader(fallback);
		});
})();
