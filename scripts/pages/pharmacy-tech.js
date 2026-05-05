(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19620 page type-page status-publish hentry" id="post-19620">
<div class="entry-content">
<p><img alt="" class="alignright size-medium wp-image-17371" decoding="async" fetchpriority="high" height="202" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/Pharmacy-Tech-header-300x202.jpg" srcset="https://bergen.edu/wp-content/uploads/Pharmacy-Tech-header-300x202.jpg 300w, https://bergen.edu/wp-content/uploads/Pharmacy-Tech-header.jpg 1000w" width="300"/><br/>
Learn skills necessary to work in a Pharmacy.</p>
<ul class="page-list">
<li class="page_item page-item-2312"><a href="https://ce.bergen.edu/health-professions-courses/hh-133/">HH 133 | Pharmacy Technician Certification Program</a></li>
<li class="page_item page-item-2325"><a href="https://ce.bergen.edu/health-professions-courses/hh-354/">HH 354 | Pharmacy Technician Compounding</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19620 -->
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
