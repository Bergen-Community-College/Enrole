(function () {
	function applyUtils() {
		
		// Remove breadcrumb links whose href ends with FD0CE0A8
		var breadcrumb = document.querySelector('#breadcrumbTop');
		if (breadcrumb) {
			breadcrumb.querySelectorAll('a[href$="FD0CE0A8"]').forEach(function (el) {
				el.parentNode.removeChild(el);
			});
		}

		// Remove nav item for FD0CE0A8
		var navItem = document.getElementById('navFD0CE0A8');
		if (navItem) {
			navItem.parentNode.removeChild(navItem);
		}

	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyUtils);
	} else {
		applyUtils();
	}
})();
