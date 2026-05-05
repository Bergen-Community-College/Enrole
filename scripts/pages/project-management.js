(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19590 page type-page status-publish hentry" id="post-19590">
<div class="entry-content">
<p>The Certificate in Project Management enables individuals to leverage their knowledge and experience to become effective project managers and is essential for anyone overseeing projects in today’s professional environment. Students will learn to apply strategies to effectively manage multifaceted projects by developing competencies to lead and direct project teams, facilitating productive relationships between project teams and customers.</p>
<h3>What is the PMP?</h3>
<p>Wherever you are in your career, the globally recognized Project Management Professional (PMP) certification tells employers, peers, and the world you know what you’re doing in project management. Even if “project manager” isn’t part of your title, the PMP applies to anyone who helps bring a project to completion. Just like a CPA validates expertise for accountants, the PMP recognizes your ability to manage projects—and the hard work you’ve done so far.</p>
<p><strong>Why get the PMP®?</strong><br/>
PMP® Certification is the most popular credential in project management offered by PMI®. Project Management is the application of knowledge, skills and techniques to execute projects effectively and efficiently. It’s a strategic competency for organizations, enabling them to tie project results to business goals and thus, better compete in their markets. Getting your Project Management Professional (PMP® certification) is a solid investment in your future. This class will prepare you for the PMP exam.</p>
<p>Prior to enrolling in any Project Management Course, it is important to make sure you meet PMP Certification requirements. To do so, please <a href="https://www.pmi.org/certifications/types/project-management-pmp">follow this link. </a>After completing this course, you will be prepared to take the PMP or CAPM exam.</p>
<p><em>This is an approved program on <a href="https://njtrainingsystems.dol.state.nj.us/default.aspx">New Jersey’s Eligible Training Provider List (ETPL)</a></em></p>
<p><a href="https://ce.bergen.edu/project-management-courses/bi-786/">BI-786 Project Management Certficate (36 hours)</a></p>
<p><a href="https://ce.bergen.edu/project-management-courses/bi-794/">BI-794 PMP Exam Prep Bootcamp (36 hours)</a></p>
<p><a href="https://ce.bergen.edu/project-management-courses/cp-396/">CP-396 Combined Project Management Certificate and PMP Exam Prep Bootcamp</a> (72 hours)</p>
<p> </p>
<h3></h3>
<h3></h3>
</div><!-- .entry-content -->
</article><!-- #post-19590 -->
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
