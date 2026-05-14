(function () {
	var match = location.search.match(/[?&]categoryId=([^&]*)/);
	if (!match) return;

	var categoryId = match[1];
	var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
	var base = isLocal ? './scripts/pages/' : 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@main/scripts/pages/';

	var s = document.createElement('script');
	s.src = base + categoryId + '.js';
	document.head.appendChild(s);
})();
