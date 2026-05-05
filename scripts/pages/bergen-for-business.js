(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-2568 page type-page status-publish hentry" id="post-2568">
<div class="entry-content">
<h2><b>Berg</b><b>en for Business</b></h2>
<h3>FOR EMPLOYERS</h3>
<h4><a href="https://form.jotform.com/251316556881159/prefill/6827201a3137656dac06e37e9843">CLICK HERE to Register for Free Workforce Development Courses</a></h4>
<p><span style="font-weight: 400;">We offer free 1-3 day mini workshops on technology, management skills and ESL. Anyone working at least 20 hours a week in the State of New Jersey is eligible for these free workshops and courses (excluding government employees). <a href="https://bergen.edu/ce/bergen-for-business/corporate-education-and-professional-development/njbia-grant-funded-training/">Click here</a> for more information.</span></p>
<h4><a href="https://www.bergenforbusiness.com/request-assistance/">Get Free Small Business Consulting</a></h4>
<p><span style="font-weight: 400;">Our free student business consulting service connects your company with skilled students to work on real-world projects and provide fresh insights.</span></p>
<h4><a href="https://bergen.edu/ce/bergen-for-business/business-accelerator/">Apply for Co-Working Space for Entrepreneurs</a></h4>
<p><span style="font-weight: 400;">We have workspace available for entrepreneurs and small business owners to grow, collaborate, and thrive.</span></p>
<h4><a href="https://bergen.edu/ce/courses-programs/business-and-technology/">Fee-Based Workforce Development Courses</a></h4>
<p>Develop in-demand skills with courses in marketing, project management, Excel and data analytics, leadership, and more.</p>
<h3>FOR BERGEN STUDENTS</h3>
<p><a href="https://forms.gle/Yy8dKqt7GorjnSAs9"><strong>Apply to be a Small Business Consultant</strong></a></p>
<p>In this paid internship, you will become a small business consultant and assist local business owners with marketing, finance, and business development projects.</p>
<p><strong><a href="https://form.jotform.com/250464346226051">Free Workspace for Student Entrepreneurs</a></strong></p>
<p>Are you a student with a small business or thinking of starting one? We offer free workspace where you can work, collaborate and grow your business.</p>
</div><!-- .entry-content -->
</article><!-- #post-2568 -->
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
