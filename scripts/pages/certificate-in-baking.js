(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19570 page type-page status-publish hentry" id="post-19570">
<div class="entry-content">
<p><strong>Total of Six (6) Courses:</strong> Complete the four (4) Core Courses, plus two (2) Elective Courses. Students with the Certificate in Baking can transfer a maximum of 18 credits into a 30-credit HRM certificate and/or a 60-credit HRM degree program at Bergen Community College. Continuing Education students who are interested in furthering their education can contact the Office of Curriculum (Email <a href="mailto:ikleinman@bergen.edu">Ilene Kleinman</a> for details).</p>
<p><strong>Core Courses (must complete all 4)</strong><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-066/">SD-066 Food Protection and Safety</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-008/">SD-008 Professional Food Preparation Techniques</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-006/">SD-006 Introduction to Baking</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-049/">SD-049 Advanced Baking</a></p>
<p><strong>Elective Courses (must complete 2)</strong><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-050/">SD-050 Confectionary Arts</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-085/">SD-085 Artisan Breads Production</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-086/">SD-086 Specialty Cakes</a></p>
</div><!-- .entry-content -->
</article><!-- #post-19570 -->
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
