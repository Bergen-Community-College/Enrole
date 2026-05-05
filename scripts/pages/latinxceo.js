(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-30152 page type-page status-publish hentry" id="post-30152">
<div class="entry-content">
<h3>LatinxCEO</h3>
<p><figure aria-describedby="caption-attachment-30510" class="wp-caption alignright" id="attachment_30510" style="width: 236px"><img alt="LatinxCEO Cover" class="size-medium wp-image-30510" decoding="async" fetchpriority="high" height="300" sizes="(max-width: 236px) 100vw, 236px" src="https://bergen.edu/wp-content/uploads/FlipBook-Cover-236x300.png" srcset="https://bergen.edu/wp-content/uploads/FlipBook-Cover-236x300.png 236w, https://bergen.edu/wp-content/uploads/FlipBook-Cover-400x510.png 400w, https://bergen.edu/wp-content/uploads/FlipBook-Cover.png 596w" width="236"/><figcaption class="wp-caption-text" id="caption-attachment-30510"><a href="https://simplebooklet.com/latinxceo#page=1">[View the magazine]</a></figcaption></figure><br/>
Bergen Community College develops, inspires, and empowers aspiring Latino business professionals. The program offers Hispanic students and their allies opportunities to network with companies and professionals from various industries, increasing career awareness and improving business communication skills.</p>
<p><strong>No-Cost Ways for Compan</strong><strong>ies to Get Involved</strong></p>
<ul>
<li>Allow students to job shadow your employees.</li>
<li>Invite students to visit your corporate headquarters.</li>
<li>Be a guest speaker at a LatinxCEO event.</li>
<li>Interested companies can email us at <a href="mailto:latinxceo@bergen.edu">latinxceo@bergen.edu</a>.</li>
</ul>
<h4><a href="https://form.jotform.com/241656558708064">Spring 2025 LatinxCEO Events &amp; Sign-Up for Students</a></h4>
<h3>Hispanic-Serving Institution (HSI) Designation and Benefits at Bergen Community College<br/>
<img alt="Hispanic Serving Institution" class="alignright wp-image-26701" decoding="async" height="178" sizes="(max-width: 178px) 100vw, 178px" src="https://bergen.edu/wp-content/uploads/hsi-badge.png?_t=1719328277" srcset="https://bergen.edu/wp-content/uploads/hsi-badge.png 170w, https://bergen.edu/wp-content/uploads/hsi-badge-150x150.png 150w, https://bergen.edu/wp-content/uploads/hsi-badge-45x45.png 45w" width="178"/></h3>
<p>Bergen Community College is designated as a Hispanic-Serving Institution (HSI) by the Hispanic Association of Colleges and Universities (HACU). HSIs are defined as colleges, universities, or systems/districts where total Hispanic enrollment constitutes a minimum of 25% of the total headcount enrollment.</p>
<p>Bergen Community College students are eligible for HACU’s internships, scholarships, and leadership development opportunities and programs.</p>
<p class="gray-text">LatinxCEO staff at Bergen Community College are available to help any student from Bergen Community College who is interested in applying for HACU scholarships or leadership development opportunities. Contact us at <a href="mailto:latinxceo@bergen.edu">latinxceo@bergen.edu</a>.</p>
<h4><a href="https://lp.constantcontactpages.com/cu/KPrJ37O">All Fall 2024 HACU Internships, Scholarships and Leadership Development Programs</a></h4>
</div><!-- .entry-content -->
</article><!-- #post-30152 -->
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
