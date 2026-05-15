(function () {
	var match = location.search.match(/[?&]categoryId=([^&]*)/);
	if (!match) return;

	var categoryId = match[1];
	var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
	var sha = 'main';
	if (!isLocal) {
		try {
			var cached = JSON.parse(localStorage.getItem('cf_jsdelivr_sha'));
			if (cached && cached.sha) sha = cached.sha;
		} catch (e) {}
	}
	var base = isLocal ? './scripts/pages/' : 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@' + sha + '/scripts/pages/';

	var s = document.createElement('script');
	s.src = base + categoryId + '.js';
	document.head.appendChild(s);
})();
