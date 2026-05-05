(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19823 page type-page status-publish hentry" id="post-19823">
<div class="entry-content">
<h3>Customized Training</h3>
<p>At Bergen, we understand that a company’s success is directly linked to the competence of its workforce. Therefore, we offer a wide range of tailored training programs that cater to various industries and skill levels. Courses can be held online, at any of our three campuses, or we can come to your office.</p>
<p>In Demand Courses:</p>
<ul>
<li>Project Management</li>
<li>ChatGPT for Business</li>
<li>Human Resources for a Changing Workforce</li>
<li>Financial Modeling for Beginners</li>
<li>Lean Six Sigma Green Belt</li>
<li>Managing Teams Remotely</li>
<li>Time Management and Productivity</li>
<li><a href="https://bergen.edu/wp-content/uploads/Next-Level-Business-Coaching.pdf">Next Level Business Coaching for New Supervisors</a></li>
</ul>
<h3><a href="https://bergen.edu/ce/bergen-for-business/corporate-education-and-professional-development/njbia-grant-funded-training/">Free Technology and Business Skills Training for Employees</a></h3>
<p>We also provide free courses for your employees funded by the New Jersey Department of Labor. Employees working a minimum of 20 hours per week can enroll in these classes.</p>
<p><b>Technology Training:</b></p>
<ul>
<li><span style="font-weight: 400;">Windows, MS Word, MS Excel, MS PowerPoint, MS Access, Google Workspace</span></li>
</ul>
<p><b>Business Skills Training:</b></p>
<ul>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">English as a Second Language</span></li>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">Verbal, Written, and Customer Service Communications</span></li>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">Problem Solving/Critical Thinking</span></li>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">Team Building</span></li>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">Time Management</span></li>
<li aria-level="1" style="font-weight: 400;"><span style="font-weight: 400;">Leadership Skills</span></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19823 -->
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
