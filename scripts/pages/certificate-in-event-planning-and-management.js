(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19571 page type-page status-publish hentry" id="post-19571">
<div class="entry-content">
<p>The Event Planning and Management Certificate program offers a comprehensive foundation for a career in event planning and catering. Students begin by exploring the diverse facets of the event industry and identifying the key elements that define different types of events and venues. Building on this classroom knowledge, they gain hands-on experience by planning, budgeting, executing, and evaluating real-world events in student-run restaurant and meeting room settings.</p>
<p>These courses allow students the opportunity to participate in college division courses with matriculated students.</p>
<p><strong>Total of Nine (9) Courses:</strong> Students must complete the nine courses.</p>
<p>Students with the Certificate in Event Planning and Management can transfer a maximum of 18 credits into a 30-credit HRM certificate and/or a maximum of 24 credits into a 60-credit HRM degree program at Bergen Community College. Continuing Education students who are interested in furthering their education can contact the Office of Curriculum (Email <a href="mailto:ikleinman@bergen.edu">Ilene Kleinman </a>for details.)</p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-087/">SD-087 Introduction to Hospitality Management</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-066/">SD-066 Food Protection and Safety</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-008/">SD-008 Professional Food Preparation Techniques</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-067/">SD-067 Menu Planning and Nutrition</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-070/">SD-070 Event Planning and Management I</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-076/">SD-076 Purchasing and Cost Control</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-069/">SD-069 Restaurant Service Management</a><br/>
<a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-088/">SD-088 Event Planning and Management II</a></p>
<p><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-072/">SD-072 Beverage Management</a></p>
<p> </p>
<p>Contact <a href="mailto:ykil1@bergen.edu" rel="noopener noreferrer" target="_blank">ykil1@bergen.edu</a> with any questions.</p>
</div><!-- .entry-content -->
</article><!-- #post-19571 -->
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
