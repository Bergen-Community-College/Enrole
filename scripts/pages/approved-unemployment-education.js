(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19507 page type-page status-publish hentry" id="post-19507">
<div class="entry-content">
<p><img alt="" class="alignright size-medium wp-image-19508" decoding="async" fetchpriority="high" height="300" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education-300x300.jpg" srcset="https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education-300x300.jpg 300w, https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education-1024x1024.jpg 1024w, https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education-150x150.jpg 150w, https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education-45x45.jpg 45w, https://bergen.edu/wp-content/uploads/Approved-Unemployment-Education.jpg 1200w" width="300"/><br/>
<strong>No Cost Training with Waiver </strong><br/>
If you are a New Jersey resident who is unemployed or underemployed, you may be eligible for job training at no cost. Our counselors can help you select the training program that is best for you; assist you in completing the application; and provide free job placement assistance.</p>
<p><strong>Eligibility </strong><br/>
Bergen County residents who have been in the workforce for at least two (2) years and are currently unemployed or underemployed and receiving New Jersey Unemployment Benefits.</p>
<p><strong>Who is Considered Underemployed?</strong></p>
<ul>
<li>Skilled workers in low-income jobs.</li>
<li>Skilled workers in jobs that don’t fully utilize their skills.</li>
<li>Part-time workers who would rather work full-time.</li>
</ul>
<p><strong>How to apply:</strong></p>
<ol>
<li>Browse our Approved Programs below and find a program that interests you.</li>
<li>Click on the “Contact Us” button on each program page to connect with the Supervisor for that program.</li>
<li>If you are unsure of which program is right for you, we can assist in finding the right training program for you. <a href="mailto:jpardo1@bergen.edu">Click here to set up a career consultation.</a></li>
<li>Next, contact your local Job Center (formerly One-Stop Career Center) to request approval for training and education assistance. New Jersey Job Centers are currently not open for in-person appointments. Bergen County residents should complete this <a href="https://bergenjobcenter.com/job-seeker-request-for-services/">Request for Services</a>. Residents outside of Bergen County, can <a href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx">locate your local Job Center here</a>. Click the box that says “Training and Education Assistance” and in the comments section state that you are seeking training for either a new career or a way to expand your employment opportunities.</li>
<li>If your Job Center counselor approves the program, you may be given an Individual Training Account (ITA) Contract.</li>
<li>Once we receive your ITA contract from the Job Center Counselor, and we will register you in the certificate program.</li>
</ol>
<p><strong>Why Choose Bergen for your Approved Unemployment Education?</strong></p>
<ul>
<li>Assistance with Individual Training Account (ITA) application</li>
<li>New programs start often</li>
<li>Free career placement services</li>
<li>In person and online classes</li>
<li>Earn national industry credentials</li>
<li>Largest community college in NJ</li>
<li>Learn from industry experts</li>
<li>Short term or long term training options</li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19507 -->
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
