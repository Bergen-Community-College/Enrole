(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19549 page type-page status-publish hentry" id="post-19549">
<div class="entry-content">
<p>These Non-Credit ESL courses consist of Core and Enrichment Courses that teach intensive English from Beginner to Advanced Levels for work and everyday life skills. As students move from level to level new skills and more advanced content are introduced.</p>
<ul>
<li>Become more comfortable speaking with healthcare providers, school educators, and while out shopping.</li>
<li>Improve your workplace English skills!</li>
</ul>
<p>Most courses cost $455.00 + books and meet Monday through Thursday in 7-week cycles from 9:00 a.m.- 12:00 p.m. or 6:00 p.m.- 9:00 p.m.</p>
<p>(Customized ESL courses for employees in industry are also available.)</p>
<p><strong>All new students must begin with a Placement Test.</strong></p>
<div class="onebutton"><a class="buttontable" href="https://ce.bergen.edu/sd-199"><strong>New Students:<br/>
Click here to register for an FREE ESL Placement Test</strong></a></div>
<h3><a href="https://ce.bergen.edu/esl-courses/">Click here for a full course list with registration details</a></h3>
<hr/>
<ul class="display-posts-listing">
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-099/">SD 099 | ESL-Introduction to the English Language</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-100/">SD 100 | ESL-Beginner I</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-101/">SD 101 | ESL-Beginner II</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-102/">SD 102 | ESL-Intermediate I</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-103/">SD 103 | ESL-Intermediate II</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-104/">SD 104 | ESL-Advanced I</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-105/">SD 105 | ESL-Advanced II</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-106/">SD 106 | ESL-Writing and Conversation</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-107/">SD 107 | ESL-American Pronunciation</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-108/">SD 108 | ESL-Beginner Conversation</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-109/">SD 109 | ESL-Let’s Talk</a></li>
<li class="listing-item"><a class="title" href="https://ce.bergen.edu/esl-courses/sd-110/">SD 110 | ESL-Speaking and Pronunciation</a></li>
</ul>
<div class="gmail_default">
<div>
<h4>Didn’t find what you were looking for? Browse hundreds of online courses from our partner, Ed2Go.</h4>
<ul>
<li aria-level="1" style="font-weight: 400;"><a href="https://www.ed2go.com/bccdce/">Fundamental Courses</a></li>
<li aria-level="1" style="font-weight: 400;"><a href="https://onlinecareertraining.bergen.edu/">Advanced Career Training Programs</a></li>
</ul>
</div>
</div>
<hr/>
<p><strong>Questions?</strong><br/>
<strong>email:</strong> <a href="mailto:bcchackensack@bergen.edu" rel="noopener noreferrer" target="_blank">bcchackensack@bergen.edu</a><br/>
<strong>Phone:</strong> 201-489-1551</p>
</div><!-- .entry-content -->
</article><!-- #post-19549 -->
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
