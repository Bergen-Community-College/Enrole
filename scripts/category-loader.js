(function () {
	var match = location.search.match(/[?&]categoryId=([^&]*)/);
	if (!match) return;

	var categoryId = match[1];
	var sha = window.cf_jsdelivr_sha || 'main';
	var base = 'https://cdn.jsdelivr.net/gh/Bergen-Community-College/Enrole@' + sha + '/scripts/pages/';

	var s = document.createElement('script');
	s.src = base + categoryId + '.js';
	document.head.appendChild(s);
})();
