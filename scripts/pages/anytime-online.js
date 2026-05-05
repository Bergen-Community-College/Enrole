(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19587 page type-page status-publish hentry" id="post-19587">
<div class="entry-content">
<h2>Anytime Online</h2>
<p>Bergen Community College offers over 1,600 online certifications, courses, and programs, allowing you to study at your own pace and convenience.</p>
<p><strong><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></strong><br/>
Online open enrollment programs designed to provide the skills necessary to acquire professional level positions for many in-demand occupations. This program is delivered through a partnership with Ed2Go.<br/>
<strong>Popular Courses</strong><br/>
<a href="https://onlinecareertraining.bergen.edu/training-programs/ace-personal-trainer/">ACE Personal Trainer</a> | <a href="https://onlinecareertraining.bergen.edu/training-programs/child-development-associate-center-based/">Child Development Associate</a> | <a href="https://onlinecareertraining.bergen.edu/training-programs/digital-court-reporter/">Digital Court Reporter</a> | <a href="https://onlinecareertraining.bergen.edu/">View Full Catalog</a></p>
<p><a href="https://www.ed2go.com/bccdce/"><strong>Quick Skills</strong></a><br/>
<span style="font-weight: 400;">Fast-track your skills with quick classes in Excel, speed Spanish, interior design and more. Designed for efficiency, these courses offer practical knowledge and hands-on experience, perfect for busy individuals seeking immediate expertise in a convenient and impactful way. This program is delivered through a partnership with Ed2Go.<br/>
<strong>Popular Courses</strong><br/>
<a href="https://www.ed2go.com/bccdce/online-courses/accounting-fundamentals/">Accounting Fundamentals </a>| <a href="https://www.ed2go.com/bccdce/online-courses/learn-spanish-online/">Speed Spanish</a> | <a href="https://www.ed2go.com/bccdce/online-courses/quickbooks-online/">Intro to QuickBooks Online</a> | <a href="https://www.ed2go.com/bccdce/online-courses/introduction-to-artificial-intelligence/">Intro to AI</a> | <a href="https://www.ed2go.com/bccdce/">View Full Catalog</a><br/>
</span></p>
<p><a href="https://onlinecareertraining.bergen.edu/health-and-fitness-programs/"><b>Health Professions</b></a><br/>
<span style="font-weight: 400;">The flexible online training you need to start a new career in the medical industry. This program is delivered through a partnership with Ed2Go.<br/>
<strong>Popular Courses</strong><br/>
<a href="https://onlinecareertraining.bergen.edu/training-programs/pharmacy-technician/?Category=health-and-fitness">Pharmacy Technician</a> | <a href="https://onlinecareertraining.bergen.edu/training-programs/certified-ekg-technician-voucher/?Category=health-and-fitness">Certified EKG Technician</a> | <a href="https://onlinecareertraining.bergen.edu/training-programs/medical-billing-certification-training-voucher-included/">Medical Billing Specialist</a> | <a href="https://onlinecareertraining.bergen.edu/health-and-fitness-programs/">View Full Catalog</a></span><b></b></p>
<p><!-- Software Development Bootcamp Software Engineer UX UI UX/UI Design Bootcamp --></p>
</div><!-- .entry-content -->
</article><!-- #post-19587 -->
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
