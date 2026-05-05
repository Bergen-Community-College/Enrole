(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19566 page type-page status-publish hentry" id="post-19566">
<div class="entry-content">
<p><img alt="" class="alignright wp-image-24942 size-full" decoding="async" fetchpriority="high" height="246" sizes="(max-width: 400px) 100vw, 400px" src="https://bergen.edu/wp-content/uploads/33864473568_6b128a086d_w-1.jpg?_t=1679005790" srcset="https://bergen.edu/wp-content/uploads/33864473568_6b128a086d_w-1.jpg 400w, https://bergen.edu/wp-content/uploads/33864473568_6b128a086d_w-1-300x185.jpg 300w" width="400"/><br/>
The Hospitality and Culinary Program at Bergen Community College Division of Continuing Education and Workforce Development provides a comprehensive foundation in baking, culinary preparation, event planning and catering. The program is designed to prepare entry-level or working foodservice professionals to enhance hands-on skills or refresh their culinary and hospitality expertise. Students will be able to apply their knowledge and techniques in various settings such as retail, bakery, lodging, catering, and restaurant.</p>
<p>We offer three certifications in the culinary arts for students interested in enhancing their personal or professional skills, two certifications in cooking and baking and one certification in event planning and management. The program is open to all students 18 years and older, regardless of ability and/or experience in the hospitality and culinary areas. The following certificates, offered through Continuing Education in collaboration with the Department of Hotel and Restaurant Management (HRM), award college credit via the assessment of prior learning (PLA) process. Continuing Education students who are interested in furthering their education can contact the Office of Curriculum (Email <a href="mailto:ikleinman@bergen.edu">Ilene Kleinman</a> for details).</p>
<h2>Hospitality &amp; Culinary Certificates:</h2>
<p><a href="https://bergen.edu/ce/courses-programs/hospitality-culinary/certificate-in-professional-cooking/">Certificate in Professional Cooking</a><br/>
<a href="https://bergen.edu/ce/courses-programs/hospitality-culinary/certificate-in-baking/">Certificate in Baking</a><br/>
<a href="https://bergen.edu/ce/courses-programs/hospitality-culinary/certificate-in-event-planning-and-management/">Certificate in Event Planning and Management</a></p>
<h3><a href="https://ce.bergen.edu/hospitality-culinary-courses/">Click here for a full course list with registration details</a></h3>
<hr/>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-006/">SD-006 | Introduction to Baking</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-008/">SD-008 | Professional Food Preparation Techniques</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-049/">SD-049 | Advanced Baking</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-050/">SD-050 | Confectionery Art</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-066/">SD-066 | Food Protection and Safety</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-067/">SD-067 | Menu Planning and Nutrition</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-069/">SD-069 | Restaurant Service Management</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-070/">SD-070 | Event Planning and Management I</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-072/">SD-072 | Beverage Management</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-076/">SD-076 | Purchasing and Cost Control</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-084/">SD-084 | Class Garde Manger</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-085/">SD-085 | Artisan Bread Production</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-086/">SD-086 | Specialty Cakes</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-087/">SD-087 | Introduction to Hospitality Management</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/hospitality-culinary-courses/sd-088/">SD-088 | Event Planning and Management II</a></li>
<li><a href="https://ce.bergen.edu/hospitality-culinary-courses/sd-094/">SD-094 | Introduction to Hospitality, Culinary and Tourism</a></li>
</ul>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19566 -->
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
