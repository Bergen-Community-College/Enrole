(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19562 page type-page status-publish hentry" id="post-19562">
<div class="entry-content">
<p>To enroll in all Health Professions courses, you must be 18 years old and have a high school diploma or equivalent.</p>
<hr/>
<h2>Health Professions Program Pathways:</h2>
<p><strong><a href="https://bergen.edu/ce/courses-programs/health-professions/patient-care-technician-associate-certificate-program/">Patient Care Technician/Associate Certificate Program (Valid CNA License Required to Enroll)</a></strong></p>
<h2>Health Professions Courses/Certificates:</h2>
<h3><a href="https://ce.bergen.edu/health-professions-courses/">Click here for a full course/certificate list with registration details</a></h3>
<h4>Patient Care Courses</h4>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-772/">Certified Nursing Assistant (CNA) Program (HH-772)</a></li>
<li><a class="title" href="https://bergen.edu/ce/courses-programs/health-professions/patient-care-technician-associate-certificate-program/">Patient Care Technician – Requires</a> HH-772, HH-190, HH-193 and HH-211</li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-190/">Advanced Patient Care Skills (HH-190)</a></li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-193/">Phlebotomy Technician Skills Certification (HH-193)</a></li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-211/">EKG Certified Technician (HH211)</a></li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-194/">Cardiac Rhythm Interpretation Course (HH-194)</a></li>
</ul>
<h4>Pharmacy Tech Programs</h4>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-133/">Pharmacy Technician Certification Program (HH-133)</a></li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-354/">Pharmacy Technician Compounding (HH-354)</a></li>
</ul>
<h4>American Heart Association Certifications</h4>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-352/">Blood Borne Pathogens Certificate (HH-352)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-703/">BLS for Healthcare Providers (HH-703)</a></li>
</ul>
<h4>Health Professions General Courses</h4>
<ul>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-266/">Medical Terminology (HH-266)</a></li>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-356/">ESL For Health Professions (HH-356)</a></li>
</ul>
<h4>Certified Alcohol and Drug Counselor</h4>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-177/">CADC Domain I (HH-177)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-178/">CADC Domain II (HH-178)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-179/">CADC Domain III (HH-179)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-180/">CADC Domain IV (HH-180)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-181/">CADC Domain V (HH-181)</a></li>
</ul>
<h4>Other Health Profession Courses</h4>
<ul>
<li><a class="title" href="https://ce.bergen.edu/health-professions-courses/hh-008/">Central Sterile Processing Technician (HH-008)</a></li>
</ul>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19562 -->
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
