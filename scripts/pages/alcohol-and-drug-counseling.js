(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19612 page type-page status-publish hentry" id="post-19612">
<div class="entry-content">
<p><img alt="" class="alignright size-medium wp-image-19613" decoding="async" fetchpriority="high" height="200" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/Alcohol-and-Drug-Counseling-1-300x200.jpg" srcset="https://bergen.edu/wp-content/uploads/Alcohol-and-Drug-Counseling-1-300x200.jpg 300w, https://bergen.edu/wp-content/uploads/Alcohol-and-Drug-Counseling-1.jpg 1000w" width="300"/></p>
<p><b>Start the journey to a meaningful profession where your work will make a significant impact on the lives of those struggling with substance abuse issues.</b></p>
<p><span style="font-weight: 400;">Bergen Community College’s CADC approved program will teach the competencies to counsel individuals and groups who are affected by addiction, and provide support throughout the recovery process. The program is delivered through a series of courses over five domains. The courses in the Certified Alcohol and Drug Counselor Certificate program fulfill the educational requirements set by the Addiction Professionals Certification Board of New Jersey (<span aria-haspopup="true" class="J-JK9eJ-PJVNOc" data-g-spell-status="2" id=":52j.1" role="menuitem" tabindex="-1">APCBNJ</span>)  for CADC eligibility. Completing this program successfully can lead to a certification with the Addiction Professionals Certification Board. A supervised externship of 3,000 hours is part of the Addiction Professionals Certification Board’s certification requirement. Additional information can be found through <a href="https://certbd.org/">The Addiction Professionals Certification Board</a>.</span></p>
<p><b>The CADC program consists of five domains.</b></p>
<p><b>Each domain is 54 hours of instruction.</b></p>
<p><b>Students can enroll in more than one domain at a time.</b></p>
<p><b>Domains do not need to be taken in order.</b></p>
<p class="entry-title"><a href="https://ce.bergen.edu/health-professions-courses/hh-177/">HH-177</a> | CADC Domain I</p>
<p class="entry-title"><a href="https://ce.bergen.edu/health-professions-courses/hh-178/">HH-178</a> | CADC Domain II</p>
<p class="entry-title"><a href="https://ce.bergen.edu/health-professions-courses/hh-179/">HH-179</a> | CADC Domain III</p>
<p class="entry-title"><a href="https://ce.bergen.edu/health-professions-courses/hh-180/">HH-180</a> | CADC Domain IV</p>
<p class="entry-title"><a href="https://ce.bergen.edu/health-professions-courses/hh-181/">HH-181</a> | CADC Domain V</p>
<p>Prepare for a career as a counselor for those with alcohol and drug dependencies.</p>
</div><!-- .entry-content -->
</article><!-- #post-19612 -->
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
