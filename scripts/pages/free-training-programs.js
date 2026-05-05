(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19826 page type-page status-publish hentry" id="post-19826">
<div class="entry-content">
<h3>FREE Technology and Business Skills Training</h3>
<h4><a href="https://form.jotform.com/251316556881159/prefill/6827201a3137656dac06e37e9843">Click here to register </a></h4>
<h4><strong>Who is eligible?</strong></h4>
<div>
<p><span style="font-weight: 400;">Any individual employed at least 20 hours per week at a business or non-profit is eligible for our free classes.  Government employees are not eligible for these courses.</span></p>
<p><span style="font-weight: 400;">​​Additionally, we can provide dedicated technology, business skills and ESL courses for employers with a group of 12 or more employees. Employers interested in dedicated courses should contact us at <a href="mailto:bergenforbusiness@bergen.edu">bergenforbusiness@bergen.edu</a></span></p>
</div>
<p>Courses include: Excel, ChatGPT, Leadership for Women, Video Editing, Canva, Cybersecurity, Public Speaking, Conflict Resolution, Business Writing, Time Management and more.</p>
<div>
<h3>FREE ESL Classes</h3>
<h4><a href="https://form.jotform.com/240456445288160">Click here to start the ESL Placement Test</a>. After finishing the test, you will go straight to the ESL class signup page.</h4>
<p>We provide free beginner, intermediate and advanced English as a Second Language (ESL) courses. Each course consists of 40 hours of in-person instruction held at either our Paramus or Lyndhurst campus. All students must take a placement test to ensure they are assigned to the appropriate level. The test is offered online and should take about 30 minutes.</p>
</div>
</div><!-- .entry-content -->
</article><!-- #post-19826 -->
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
