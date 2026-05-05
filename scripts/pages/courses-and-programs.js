(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19529 page type-page status-publish hentry" id="post-19529">
<div class="entry-content">
<h2>Welcome to Continuing Education and Workforce Development</h2>
<p>Explore more than 200 Courses and Programs in the navigation pane on the right side of this page.</p>
<p> </p>
<h3><b>Trending Courses this Spring</b></h3>
<p><a href="https://bergen.edu/ce/courses-programs/teacher-education-and-childcare/paraprofessional-training/"><b>NEW! </b>Teaching Assistant/Paraprofessional Training</a></p>
<p><a href="https://bergen.edu/ce/courses-programs/teacher-education-and-childcare/registered-behavior-technician/"><b>NEW! </b><span style="font-weight: 400;">Registered Behavior Technician Training</span></a></p>
<p><a href="https://ce.bergen.edu/interior-design-courses/cd-171/"><span style="font-weight: 400;">AutoCAD Fundamentals for Interior Design</span></a></p>
<p><a href="https://bergen.edu/ce/bergen-for-business/njbia-grant-funded-training/">FREE Training</a></p>
<p><a href="https://bergen.edu/ce/courses-programs/construction-management-osha/">Get a Certificate in Construction Management in 6 months!</a></p>
<p><a href="https://bergen.edu/ce/courses-programs/health-professions/">See our Health Professions Certification courses.</a></p>
<p> </p>
<p>For further details or to register by phone, call 201-447-7488, email <a href="mailto:continuinged@bergen.edu">continuinged@bergen.edu</a> or visit us at the Technology Education Center (TEC), Room TEC-115.</p>
</div><!-- .entry-content -->
</article><!-- #post-19529 -->
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
