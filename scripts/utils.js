(function () {
	var hiddenNavItems = [
		'FC89CDF8'
	];

	function applyUtils() {
		hiddenNavItems.forEach(function (id) {
			var el = document.getElementById('nav' + id);
			if (el) el.parentNode.removeChild(el);
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyUtils);
	} else {
		applyUtils();
	}
})();
