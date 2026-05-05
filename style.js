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
	var base = isLocal ? './scripts/' : 'https://radayev.github.io/Enrole/scripts/';
	var scripts = [
        // 'nav.js', 
        'footer.js', 'sidebar-menu.js', 'category-loader.js', 'utils.js'];
	scripts.forEach(function (src) {
		var s = document.createElement('script');
		s.src = base + src;
		document.head.appendChild(s);
	});
})();
