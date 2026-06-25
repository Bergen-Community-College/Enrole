(function () {
	function init() {
		if (!location.pathname.endsWith('index.jsp')) return;

		var label = (document.title || '').trim();
		if (!label) return;

		var mainContent = document.getElementById('maincontent');
		if (!mainContent) return;

		var subHeader = document.createElement('h1');
		subHeader.className = 'subHeader';
		subHeader.textContent = label;
		mainContent.insertBefore(subHeader, mainContent.firstChild);

		var metaDesc = document.querySelector('meta[name="description"]');
		var description = metaDesc ? (metaDesc.getAttribute('content') || '').trim() : '';
		if (description) {
			var subHeaderDesc = document.createElement('p');
			subHeaderDesc.className = 'subHeaderDescription';
			subHeaderDesc.textContent = description;
			subHeader.insertAdjacentElement('afterend', subHeaderDesc);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
