(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19623 page type-page status-publish hentry" id="post-19623">
<div class="entry-content">
<p><img align="right" alt="" class="size-medium wp-image-17564" decoding="async" fetchpriority="high" height="199" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/Phlebotomy-300x199.jpg" srcset="https://bergen.edu/wp-content/uploads/Phlebotomy-300x199.jpg 300w, https://bergen.edu/wp-content/uploads/Phlebotomy.jpg 1000w" width="300"/><br/>
Train in the techniques of phlebotomy by providing skills necessary to perform venipuncture, and capillary (finger) sticks for drawing and processing blood samples.</p>
<ul class="page-list">
<li class="page_item page-item-2315"><a href="https://ce.bergen.edu/health-professions-courses/hh-193/">HH 193 | Phlebotomy Technician Skills Certification</a></li>
<li class="page_item page-item-2329"><a href="https://ce.bergen.edu/health-professions-courses/hh-404/">HH-404 | Adult IV Therapy &amp; Phlebotomy Skills for Nurses</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19623 -->
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
