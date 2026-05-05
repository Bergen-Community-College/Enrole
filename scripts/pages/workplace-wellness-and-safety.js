(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19626 page type-page status-publish hentry" id="post-19626">
<div class="entry-content">
<p><img alt="" class="alignright size-medium wp-image-17757" decoding="async" fetchpriority="high" height="225" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/Workplace-Wellness-and-Safety-header-300x225.jpg" srcset="https://bergen.edu/wp-content/uploads/Workplace-Wellness-and-Safety-header-300x225.jpg 300w, https://bergen.edu/wp-content/uploads/Workplace-Wellness-and-Safety-header.jpg 1000w" width="300"/></p>
<ul class="page-list">
<li class="page_item page-item-2324"><a href="https://ce.bergen.edu/health-professions-courses/hh-352/">HH 352 | Blood Borne Pathogens Certificate</a></li>
<li class="page_item page-item-2327"><a href="https://ce.bergen.edu/health-professions-courses/hh-703/">HH 703 | BLS for Healthcare Providers</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19626 -->
</section>
</main><!-- #main -->
</div>`;
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', injectCards);
	} else {
		injectCards();
	}
})();
