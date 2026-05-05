(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19554 page type-page status-publish hentry" id="post-19554">
<div class="entry-content">
<p dir="ltr">Fashion Design program offers students the necessary credentials, industry knowledge, and hands-on experience to earn their professional certification in fashion design.</p>
<p>For students who want to learn fashion details for personal interests, prepare for a career in the fashion industry, or build their portfolios for higher education opportunities, our fashion design courses have something to offer everyone!</p>
<p>Learn how to sew, design clothes, and develop an eye for fashion detail. Use your imagination and ingenuity to create your designs. In these “hands-on” courses, you will learn the basic principles and small details. After completing each course, you will receive a certificate of completion.</p>
<p>All are welcome to enroll in any class as an elective course for enjoyment without being part of the certificate program. If you have questions, please call 201-447-7488 or email <a href="mailto:continuinged@bergen.edu" rel="noopener noreferrer" target="_blank">continuinged@bergen.edu.</a></p>
<h2>Fashion Design Certificates:</h2>
<p><strong><a href="https://bergen.edu/ce/courses-programs/fashion-design/sewing-certificate/">Sewing Certificate</a></strong></p>
<h3><a href="https://ce.bergen.edu/fashion-design-courses/">Click here for a full course list with registration details</a></h3>
<hr/>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/fashion-design-courses/cd-592/">Sewing Essentials (CD-592)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/fashion-design-courses/cd-206/">Fabric Studies (CD-206)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/fashion-design-courses/cd-198/">Intermediate Sewing (CD-198)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/fashion-design-courses/cd-207/">Advanced Sewing &amp; Garment Construction (CD-207)</a></li>
<li><a href="https://ce.bergen.edu/fashion-design-courses/cd-156/">Fashion Workshops (CD-156)</a></li>
</ul>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19554 -->
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
