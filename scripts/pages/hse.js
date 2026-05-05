(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `<div class="content-area primary-section" id="primary">
<main class="site-main" id="main">
<section class="ed-about-us layout-1 clearfix">
<article class="post-19572 page type-page status-publish hentry" id="post-19572">
<div class="entry-content">
<p>High School Equivalency (HSE) courses give adults the opportunity to complete their high school degree by preparing for and passing an HSE exam. Students at all reading and math levels are given a placement test.  Students will improve their foundational skills in order to pass the HSE exam. Students at all reading levels are welcome.</p>
<p>We offer two different High School Equivalency courses.</p>
<div dir="ltr">
<div><span style="font-family: georgia, serif;"><strong>Pre-HSE Preparation</strong><b>:</b> Students review reading, writing and math skills in this 6-7 week course. Students are pre-tested to find areas where their skills need improvement and those areas of study are targeted.  Reading comprehension is  taught through analysis of fiction and non-fiction texts. Students will study the persuasive essay format and are helped to improve their grammar and language usage via different organizing techniques. Utilizing problem solving skills, learners review basic operations and are introduced to algebra, geometry, and data analysis. </span></div>
<div><span style="font-family: georgia, serif;"> </span></div>
<div><span style="font-family: georgia, serif;"><strong>HSE Preparation</strong><b>:</b> In this 6-7 week course, the f<span class="gmail_default">our areas of the exam</span>; <i>Reasoning through Language Arts, Mathematical Reasoning, Social Studies </i>and <i>Science</i> are extensively explored in order to prepare students to take the HSE exam. Students review grammar and language usage<span class="gmail_default">,</span> are taught to produce a polished persuasive essay, and are given strategies for the math portion of the HSE exam. </span></div>
</div>
<hr/>
<div class="onebutton"></div>
<hr/>
<h3>These courses are offered tuition free through a grant from the Department of Labor.</h3>
<hr/>
<h3>Questions?</h3>
<p><strong>Email:</strong> <a href="mailto:dolbcchackensack@bergen.edu">dolbcchackensack@bergen.edu</a><br/>
<strong>Call:</strong> (201) 301-9671</p>
</div><!-- .entry-content -->
</article><!-- #post-19572 -->
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
