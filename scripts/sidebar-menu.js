(function () {
	var MENU_ITEMS = [
		{ href: 'index.jsp',                  icon: 'fa-solid fa-book-open',       label: 'Browse Courses' },
		{ href: 'categoryId=C6B87DC8',        icon: 'fa-solid fa-location-dot',    label: 'Courses by Location' },
		{ href: 'calendar.jsp',               icon: 'fa-regular fa-calendar-days', label: 'Courses by Calendar' },
		{ href: 'cart.jsp',                   icon: 'fa-solid fa-cart-shopping',   label: 'Registration Cart' },
		{ href: 'login.jsp',                  icon: 'fa-solid fa-user',            label: 'Sign in/Create user profile' }
	];

	function init() {
		var leftMenus = document.querySelectorAll('.leftMenu');
		if (leftMenus.length < 2) return;

		var targetUl = leftMenus[0].querySelector('ul');
		if (!targetUl) return;

		// Move all <li> children from every .leftMenu into the first ul
		for (var m = 1; m < leftMenus.length; m++) {
			var uls = leftMenus[m].querySelectorAll('ul');
			for (var u = 0; u < uls.length; u++) {
				while (uls[u].children.length) {
					targetUl.appendChild(uls[u].children[0]);
				}
			}
		}

		// Remove the now-empty wrappers
		for (var k = leftMenus.length - 1; k > 0; k--) {
			leftMenus[k].parentNode.removeChild(leftMenus[k]);
		}

		// Only filter on minimal pages (index, calendar, cart, login)
		var path = location.pathname;
		var search = location.search;
		var isMinimal = /(index|calendar|cart|login)\.jsp$/.test(path);
		if (path.indexOf('index.jsp') !== -1 && search.indexOf('categoryId') !== -1) {
			isMinimal = false;
		}

		var allLis = targetUl.querySelectorAll('li');
		for (var i = 0; i < allLis.length; i++) {
			var li = allLis[i];
			var a = li.querySelector('a');
			if (!a) continue;

			var href = a.getAttribute('href') || '';
			var match = null;
			for (var j = 0; j < MENU_ITEMS.length; j++) {
				if (href.indexOf(MENU_ITEMS[j].href) !== -1) {
					match = MENU_ITEMS[j];
					break;
				}
			}

			if (match) {
				var oldIcon = a.querySelector('i');
				if (oldIcon) oldIcon.parentNode.removeChild(oldIcon);
				a.innerHTML = '';
				var icon = document.createElement('i');
				icon.className = match.icon;
				a.appendChild(icon);
				a.appendChild(document.createTextNode(match.label));
			} else if (isMinimal) {
				li.style.display = 'none';
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();