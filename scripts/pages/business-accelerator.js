(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-22080 page type-page status-publish hentry" id="post-22080">
<div class="entry-content">
<p>The Bergen Community College Business Accelerator is a college-driven community partnership created to help grow successful business ventures. The Business Accelerator offers a number of skills development programs for members, consultation services, coaching, access to shared resources and office facilities.  The purpose of the Business Accelerator is to create a atmosphere that encourages the development of businesses, have the potential to create jobs, contribute to the economic development of the region and expose students to entrepreneurship.</p>
<p>The New Jersey Statewide Hispanic Chamber of Commerce headquarters are located in our Business Accelerator at the Meadowlands campus in Lyndhurst.  The mission of the SHCCNJ is to promote the continued growth and development of New Jersey businesses by helping their members (both Hispanic and non-Hispanic) find expanded business opportunities – through networking and mutual support and serving as an active and visible advocate for small business in the political process.</p>
<h3>Resident Membership</h3>
<p>Entrepreneurs and small businesses that need expert help in growing their business can apply to become a full time member of the program including an assigned workspace. Workstations in a shared office start at $175 per month and private offices start at $350 per month.</p>
<h3>Membership Benefits</h3>
<ul>
<li>A community of creative entrepreneurs</li>
<li>Conference rooms</li>
<li>Wireless High Speed Internet</li>
<li>Mailing address</li>
<li>Printer, Copier, Scanner</li>
<li>Office furniture</li>
<li>Free professional development and training opportunities</li>
<li>Free one year membership to the New Jersey Statewide Hispanic Chamber of Commerce</li>
<li>Free one year membership to the Meadowlands Chamber of Commerce</li>
</ul>
<h3><strong>Qualification Requirements</strong></h3>
<p>In order to be eligible for consideration, candidates should meet the following criteria:</p>
<ul>
<li>Have a company registered in N.J.</li>
<li>Be in the early stages of business development</li>
<li>Must demonstrate a solution to strong market demand</li>
<li>Have a product or service that can be commercialized within two years</li>
<li>The company should plan to remain headquartered in N.J.</li>
<li>The company President/CEO must be located in the incubator</li>
<li>Have a basic business plan and a financial forecast</li>
<li>Have the ability to pay monthly fees</li>
<li>Be a business well suited to benefit from the programs services, environment, technical and business expertise.</li>
<li>Have potential for positive economic impact on the community</li>
<li>A potential for business growth and job creation.</li>
</ul>
<h3>Application</h3>
<p>Please <a href="https://forms.gle/kjeASPMQd7XNHyeQ8">click here</a> to apply for membership to the Bergen Community College Business Accelerator.</p>
<p>Questions? Email Lisa Cassesa at <a href="mailto:lcassesa@bergen.edu">lcassesa@bergen.edu.</a></p>
<h3><strong>Location Information</strong></h3>
<p>Bergen Community College<br/>
1280 Wall Street<br/>
Lyndhurst, New Jersey 07071</p>
</div><!-- .entry-content -->
</article><!-- #post-22080 -->
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
