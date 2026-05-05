(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19569 page type-page status-publish hentry" id="post-19569">
<div class="entry-content">
<p>The Certificate in Professional Cooking is designed to prepare entry-level or working food service professionals to enhance hands-on skills or refresh their culinary expertise. Students will be ready to make high-quality foods for various food service settings in restaurants, hotels, country clubs, retail markets, contract dining, tourism, and other types of establishments. Students in this certification program will be able to meet and exceed industry standards and expectations in this growing field.</p>
<p>The program is open to all students 18 years and older, regardless of ability and/or experience in the culinary area. This program prepares students for TIPS certification in beverage management and ServSafe certification in food safety and alcohol service.</p>
<p>These courses allow students the opportunity to participate in college division courses with matriculated students. Students with the Certificate in Professional Cooking can transfer a maximum of 18 credits into a 30-credit HRM certificate and/or a 60-credit HRM degree program at Bergen Community College. Continuing Education students who are interested in furthering their education can contact the Office of Curriculum (Email <a href="mailto:ikleinman@bergen.edu">Ilene Kleinman</a> for details).</p>
<p><strong>Total Seven (7) Courses</strong><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-087/">SD-087 Introduction to Hospitality Management</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-008/">SD-008 Professional Food Preparation Techniques</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-066/">SD-066 Food Protection and Safety</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-067/">SD-067 Menu Planning and Nutrition</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-006/">SD-006 Introduction to Baking</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-084/">SD-084 Class Garde Manger</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-069/">SD-069 Restaurant Service Management</a><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-303/"> </a></p>
<p>The courses are listed in a recommended sequence as some of the courses have prerequisites. Students need to take <a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-087/">SD-087 Introduction to Hospitality Management</a> and <a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-008/">SD-008 Professional Food Preparation Techniques</a> first and <a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-069/">SD-069 Restaurant Service Management</a> as their final course.</p>
</div><!-- .entry-content -->
</article><!-- #post-19569 -->
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
