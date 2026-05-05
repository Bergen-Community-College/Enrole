(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-22149 page type-page status-publish hentry" id="post-22149">
<div class="entry-content">
<h2>Free Consulting for Small Business Owners</h2>
<h3>Small Business Owners</h3>
<p>Bergen County business owners can receive up to ten hours of complimentary project-based services tailored to their needs. Business owners select the focus of their projects, which have included tasks such as social media management, competitor research, flyer design, setting up a Google Business profile, sourcing new suppliers, gathering customer testimonials, and providing photography or video services. This program offers businesses valuable support at no cost, helping them enhance their operations, marketing, and overall growth.</p>
<p><span style="color: #660099;"><strong> <a href="https://www.bergenforbusiness.com/request-assistance/" style="color: #660099;">Click here to request free consulting services.</a></strong></span></p>
<h3>Students</h3>
<p>Bergen Community College students from any major have the opportunity to participate in a paid internship, offering valuable consulting services to small business owners at no cost. Based in the Pitkin Education Center in Room A-108, located on the first floor of the Student Center, this flexible program allows students to work between 2 and 10 hours per week, gaining practical experience while helping local businesses thrive.</p>
<p><span style="color: #660099;"><strong><a href="https://forms.gle/QjetycDUJn7HZ1YE9" style="color: #660099;">Click here to apply for this internship program.</a></strong></span></p>
<h3>Award-Winning Program Powered by Bergen County Support</h3>
<p>This groundbreaking, award-winning program is made possible through the generous support of Bergen County Executive James Tedesco and the Bergen County Office of Economic Development. The Bergen Community College small business consulting program was selected as a 2021-2022 <a href="https://www.league.org/web-page/2021-2022-innovation-year-award-winners">Innovation of the Year Award Winner</a> by the League for Innovation in the Community College.</p>
</div><!-- .entry-content -->
</article><!-- #post-22149 -->
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
