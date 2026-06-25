(function () {
	function cleanTitle(title) {
		// Drop the trailing site-name segment (after the last " - " or " | ")
		var parts = (title || '').split(/\s+[-|]\s+/);
		if (parts.length > 1) parts.pop();
		var label = parts.join(' - ').trim();
		// Drop a trailing descriptor like "courses" / "programs"
		return label.replace(/\s+(courses|programs|certificates|degrees)$/i, '').trim();
	}

	function init() {
		if (!location.pathname.endsWith('index.jsp')) return;

		var label = cleanTitle(document.title);
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
