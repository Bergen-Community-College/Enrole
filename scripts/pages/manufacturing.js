(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19584 page type-page status-publish hentry" id="post-19584">
<div class="entry-content">
<h2><img alt="" class="alignright wp-image-19585" decoding="async" fetchpriority="high" height="343" sizes="(max-width: 343px) 100vw, 343px" src="https://bergen.edu/wp-content/uploads/Manufacturing-and-Logistics-300x300.jpeg" srcset="https://bergen.edu/wp-content/uploads/Manufacturing-and-Logistics-300x300.jpeg 300w, https://bergen.edu/wp-content/uploads/Manufacturing-and-Logistics-150x150.jpeg 150w, https://bergen.edu/wp-content/uploads/Manufacturing-and-Logistics-45x45.jpeg 45w, https://bergen.edu/wp-content/uploads/Manufacturing-and-Logistics.jpeg 939w" width="343"/><strong>Advanced Manufacturing Free Bootcamp</strong></h2>
<p>Bergen Community College offers training for those looking to build rewarding and well-paying careers in the high-demand field of advanced manufacturing. Opportunities are available to those with mechanical ability. Candidates do not need prior experience in advanced manufacturing to be eligible for this program.</p>
<p><strong>Eligibility</strong></p>
<ul>
<li>High school diploma or equivalency</li>
<li>17 years of age or older</li>
<li>Authorized to work in the United States</li>
</ul>
<p><a href="https://form.jotform.com/203494075909160"><strong>Apply Now</strong></a></p>
<h4>Additional Manufacturing Courses</h4>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/manufacturing-logistics-courses/cp-311/">Welding Training Level I (CP-311)</a></li>
</ul>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19584 -->
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
