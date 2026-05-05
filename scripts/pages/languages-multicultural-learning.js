(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19577 page type-page status-publish hentry" id="post-19577">
<div class="entry-content">
<p><img alt="" class="alignright size-medium wp-image-19580" decoding="async" fetchpriority="high" height="300" sizes="(max-width: 300px) 100vw, 300px" src="https://bergen.edu/wp-content/uploads/World-Languages-300x300.jpg" srcset="https://bergen.edu/wp-content/uploads/World-Languages-300x300.jpg 300w, https://bergen.edu/wp-content/uploads/World-Languages-150x150.jpg 150w, https://bergen.edu/wp-content/uploads/World-Languages-45x45.jpg 45w, https://bergen.edu/wp-content/uploads/World-Languages.jpg 400w" width="300"/></p>
<p data-end="129" data-start="72"><strong data-end="129" data-start="72">Multicultural Learning Program (Korean-Taught Courses)</strong></p>
<p data-end="554" data-start="131">Offered through Continuing Education in collaboration with the Departments of History and Psychology, this multicultural program invites students to explore cultures, worldviews, and human societies across different historical eras. Through interdisciplinary courses taught entirely in Korean, students examine the foundations of human relationships, behavior, and communication from global and cross-cultural perspectives.</p>
<p data-end="898" data-start="556">These courses are open to anyone with Korean language proficiency who is interested in deepening their cultural understanding and academic curiosity. While the program does not offer academic credit or certificates of completion, it provides a rich learning experience led by subject-matter experts in a dynamic, discussion-based environment.</p>
<p data-end="922" data-start="900"><strong data-end="922" data-start="900">Who should enroll?</strong></p>
<ul>
<li>Advanced-level Korean language learners</li>
<li>Students and community members interested in history, psychology, and multicultural studies</li>
<li>Learners seeking Korean-language academic content in an immersive environment</li>
</ul>
<p><strong>Program highlights</strong></p>
<ul>
<li>Courses taught entirely in Korean</li>
<li>Interdisciplinary collaboration between History and Psychology</li>
<li>Exploration of global cultures and human interaction across time</li>
</ul>
<h3><a href="https://ce.bergen.edu/languages-multicultural-learning-courses/">Click here for a full course list with registration details</a></h3>
<hr/>
<ul class="display-posts-listing">
<li><a href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-405/">CE 405 | Modern Asian History I (Taught in Korean)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-459/">CE-459 | American History </a><a class="title" href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-460/"> (Taught in Korean)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-460/">CE-460 | Racism in America (Taught in Korean)</a></li>
<li><a href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-403/">CE-403 | Introduction to Abnormal Psychology (Taught in Korean)</a></li>
<li><a href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-408/">CE 408  Child Psychology Multicultural Learning (Taught in Korean)</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-458/">CE-458 | Psychology Of Human Relations </a><a class="title" href="https://ce.bergen.edu/languages-multicultural-learning-courses/ce-460/"> (Taught in Korean)</a></li>
</ul>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div><!-- .entry-content -->
</article><!-- #post-19577 -->
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
