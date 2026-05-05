(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19654 page type-page status-publish hentry" id="post-19654">
<div class="entry-content">
<p>Bergen Community College invites you to share your expertise and passion by submitting your course proposals for Continuing Education and Workforce Development. We value your unique knowledge and ideas, and we believe that your contributions can shape our dynamic learning community. Don’t miss this opportunity to inspire others and make a positive impact through education. Submit your course proposals today and be part of our commitment to lifelong learning and personal growth. Join us in shaping the future of learning at Bergen Community College!</p>
<h4><a href="https://bergen.edu/wp-content/uploads/CE-Course-Proposal-Form-051723.pdf">Course Proposal Form</a> (downloadable PDF- submit anytime)</h4>
</div><!-- .entry-content -->
</article><!-- #post-19654 -->
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
