(function () {
	function init() {
		if (!location.pathname.endsWith('index.jsp')) return;

		var match = location.search.match(/[?&]categoryId=([^&]+)/);
		var label;

		if (!match) {
			label = 'Courses and Programs';
		} else {
			var navItem = document.querySelector('li[navID="' + match[1] + '"] a');
			if (!navItem) return;
			var categoryName = navItem.textContent.trim();

			var existing = document.querySelector('h1.subHeader');
			label = categoryName + ' ' + (existing ? existing.textContent.trim() : 'Courses');
		}

		var subHeader = document.querySelector('h1.subHeader');
		if (subHeader) {
			subHeader.textContent = label;
		} else {
			subHeader = document.createElement('h1');
			subHeader.className = 'subHeader';
			subHeader.textContent = label;

			var courses = document.querySelector('#maincontent .courses');
			if (courses) {
				courses.parentNode.insertBefore(subHeader, courses);
			} else {
				var mainContent = document.getElementById('maincontent');
				if (mainContent) mainContent.insertBefore(subHeader, mainContent.firstChild);
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
