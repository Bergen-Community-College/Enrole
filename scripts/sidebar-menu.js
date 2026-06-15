(function () {
	var MENU_ITEMS = [
		{ href: 'categoryId=C6B87DC8',        icon: 'fa-solid fa-location-dot',    label: 'Courses by Location' },
		{ href: 'index.jsp',                  icon: 'fa-solid fa-book-open',       label: 'Browse Courses' },
		{ href: 'calendar.jsp',               icon: 'fa-regular fa-calendar-days', label: 'Courses by Calendar' },
		{ href: 'cart.jsp',                   icon: 'fa-solid fa-cart-shopping',   label: 'Registration Cart' },
		{ href: 'login.jsp',                  icon: 'fa-solid fa-user',            label: 'Sign in/Create user profile' }
	];

	function init() {
		var leftMenus = document.querySelectorAll('.leftMenu');
		if (leftMenus.length < 2) return;

		var targetUl = leftMenus[0].querySelector('ul');
		if (!targetUl) return;

		// Collect matches — skip already-matched <a> elements
		var items = [];
		var used = [];
		for (var i = 0; i < MENU_ITEMS.length; i++) {
			var cfg = MENU_ITEMS[i];
			var allLinks = document.querySelectorAll('.leftMenu a[href*="' + cfg.href + '"]');
			for (var j = 0; j < allLinks.length; j++) {
				if (used.indexOf(allLinks[j]) === -1) {
					items.push({ a: allLinks[j], cfg: cfg });
					used.push(allLinks[j]);
					break;
				}
			}
		}

		if (!items.length) return;

		targetUl.innerHTML = '';

		for (var i = 0; i < items.length; i++) {
			var a = items[i].a;
			var cfg = items[i].cfg;

			var li = a.parentNode;
			while (li && li.tagName !== 'LI') li = li.parentNode;
			if (!li) continue;

			a.innerHTML = '';
			var icon = document.createElement('i');
			icon.className = cfg.icon;
			a.appendChild(icon);
			a.appendChild(document.createTextNode(cfg.label));

			targetUl.appendChild(li);
		}

		// Hide leftover .leftMenu wrappers
		for (var k = leftMenus.length - 1; k > 0; k--) {
			leftMenus[k].style.display = 'none';
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();