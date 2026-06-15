(function () {
	var MENU_ITEMS = [
		{ href: 'index.jsp',             icon: 'fa-solid fa-book-open',       label: 'Browse Courses' },
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

		// Collect matches before clearing targetUl
		var items = [];
		for (var i = 0; i < MENU_ITEMS.length; i++) {
			var cfg = MENU_ITEMS[i];
			var a = document.querySelector('.leftMenu a[href*="' + cfg.href + '"]');
			if (a) items.push({ a: a, cfg: cfg });
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

		// Remove empty .leftMenu wrappers (keep index 0)
		for (var k = leftMenus.length - 1; k > 0; k--) {
			if (!leftMenus[k].querySelector('li')) {
				leftMenus[k].parentNode.removeChild(leftMenus[k]);
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();