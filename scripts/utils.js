(function () {
	var hiddenNavItems = [
		'FC89CDF8',
		'FD88EE78'
	];

	function applyUtils() {
		hiddenNavItems.forEach(function (id) {
			var el = document.getElementById('nav' + id);
			if (el) el.parentNode.removeChild(el);
		});

		var headerTitle = document.getElementById('header_title');
		if (headerTitle && !headerTitle.querySelector('.cf_header_subtitle')) {
			var span = document.createElement('span');
			span.className = 'cf_header_subtitle';
			span.textContent = 'CONTINUING EDUCATION AND WORKFORCE DEVELOPMENT';
			headerTitle.appendChild(span);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', applyUtils);
	} else {
		applyUtils();
	}
})();
