(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19565 page type-page status-publish hentry" id="post-19565">
<div class="entry-content">
<p>The Patient Care Technician Certification Program provides training in various skills utilized in healthcare. This program is intended for individuals that wish to pursue an initial entry into the healthcare field or current workers who want to upgrade existing skills to enhance employment marketability in an acute care hospital or other specialized patient care setting. Participation will include four (4) course modules: Certified Nursing Assistant (Basic Patient Care Skills) – Core Credential, EKG Technician Skills Certification – Core Credential, Phlebotomy Technician Skills – Core Credential, and Advanced Patient Care Skills (Advanced Skills for Nursing Assistants). This program includes lecture, laboratory, and clinical components.</p>
<p>Please allow 30 days to complete the required entrance exam, all necessary paperwork, medical physical, vaccines, background check, and fingerprinting required. For this reason, the cancellation/refund window for this course is 30 days prior to class start. All students must pass the entrance exam prior to class start. Please contact the Health Professions office upon registration to sign up.</p>
<p><a href="https://ce.bergen.edu/health-professions-courses/hh-357/">HH-357</a>: Patient Care Technician</p>
<p>Total – 300 hours (Approximately 4 months).</p>
</div><!-- .entry-content -->
</article><!-- #post-19565 -->
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
