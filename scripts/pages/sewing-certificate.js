(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19557 page type-page status-publish hentry" id="post-19557">
<div class="entry-content">
<p>Sewing certificate program aims students to apply sewing and tailor techniques to construct garments.</p>
<ul>
<li><a href="https://ce.bergen.edu/fashiion-design-courses/cd-592/" title="CD 592 | Sewing Essentials">CD 592 | Sewing Essentials</a></li>
<li><a href="https://ce.bergen.edu/fashiion-design-courses/cd-206/" title="CD 206 | Fabric Studies">CD 206 | Fabric Studies</a></li>
<li><a href="https://ce.bergen.edu/fashiion-design-courses/cd-198/" title="CD 198 | Intermediate Sewing">CD 198 | Intermediate Sewing</a></li>
<li><a href="https://ce.bergen.edu/fashiion-design-courses/cd-207/" title="CD 207 | Advanced Sewing &amp; Garment Construction">CD 207 | Advanced Sewing &amp; Garment Construction</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19557 -->
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
