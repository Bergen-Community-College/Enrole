(function () {
	var MENU_ICONS = [
		{ href: 'index.jsp',          icon: 'fa-solid fa-book-open' },
		{ href: 'calendar.jsp',       icon: 'fa-regular fa-calendar-days' },
		{ href: 'cart.jsp',           icon: 'fa-solid fa-cart-shopping' },
		{ href: 'login.jsp',          icon: 'fa-solid fa-user' },
		{ href: 'instructorListing',  icon: 'fa-solid fa-location-dot' }
	];

	function injectIcons() {
		var leftMenus = document.querySelectorAll('.leftMenu');
		if (!leftMenus.length) return;

		var navMenu = leftMenus[0];
		var links = navMenu.querySelectorAll('a');

		for (var i = 0; i < links.length; i++) {
			var a = links[i];
			var href = a.getAttribute('href');

			for (var j = 0; j < MENU_ICONS.length; j++) {
				if (href.indexOf(MENU_ICONS[j].href) !== -1) {
					var icon = document.createElement('i');
					icon.className = MENU_ICONS[j].icon;
					icon.style.marginRight = '0.5em';
					a.insertBefore(icon, a.firstChild);
					break;
				}
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', injectIcons);
	} else {
		injectIcons();
	}
})();