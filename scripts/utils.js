(function () {
	var hiddenNavItems = [
		'FC89CDF8',
		'FD88EE78'
	];

	function fitCardText() {
		var nodes = document.querySelectorAll('.cardText');
		for (var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			el.style.fontSize = '';
			var size = parseFloat(getComputedStyle(el).fontSize);
			while (el.scrollWidth > el.clientWidth && size > 8) {
				size -= 0.5;
				el.style.fontSize = size + 'px';
			}
		}
	}

	function applyUtils() {
		hiddenNavItems.forEach(function (id) {
			var el = document.getElementById('nav' + id);
			if (el) el.parentNode.removeChild(el);
		});
		fitCardText();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyUtils);
	} else {
		applyUtils();
	}

	var resizeTimer;
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(fitCardText, 150);
	});
})();
