(function () {
	function injectCards() {
		var container = document.querySelector('.cardContainer');
		if (!container) return;

		container.innerHTML = `
			<div id="primary" class="content-area primary-section" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
				<div class="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
					<main id="main" class="site-main">
						<section class="ed-about-us layout-1 clearfix">
							<article id="post-19429" class="post-19429 page type-page status-publish has-post-thumbnail hentry">
								<div class="entry-content">
									<h2>Continuing Education and Workforce Development Programs</h2>
									<h3>Bergen for Business</h3>
									<p><a href="https://bergen.edu/ce/bergen-for-business/">Bergen for Business</a> supports employers and their teams along with providing Bergen students with real-world experiences and career-ready workshops.</p>
									<h3>Institute for Learning in Retirement (Age 55+)</h3>
									<p><a href="https://ilr.bergen.edu">Institute for Learning in Retirement</a> offers a wide range of engaging, non-credit learning opportunities for adults age 55 and older throughout the year. ILR courses are designed to stimulate intellectual curiosity, foster social connection, and encourage lifelong learning in a welcoming academic environment.</p>
									<h3>Kids and Teens Programs (Grades K-12)</h3>
									<p><a href="https://ce.bergen.edu/k12/">Kids and Teens</a> provides a variety of engaging learning opportunities for students in grades K to 12 all year round, helping them develop new skills, meet school requirements, or gain new experiences.</p>
									<h3>Continuing Education Open Enrollment Courses and Certifications</h3>
									<p>
										<a href="https://bergen.edu/ce/courses-programs/online-self-paced-courses/">Anytime Online</a><br>
										<a href="https://bergen.edu/ce/courses-programs/business-and-technology/">Business and Technology</a><br>
										<a href="https://bergen.edu/ce/courses-programs/construction-administration-and-licensing-ucc/">Construction Administration and Licensing/UCC</a><br>
										<a href="https://bergen.edu/ce/courses-programs/construction-management-osha/">Construction Management/OSHA</a><br>
										<a href="https://bergen.edu/ce/courses-programs/direct-support-professional/">Direct Support Professionals</a><br>
										<a href="https://bergen.edu/ce/courses-programs/esl-english-as-a-second-language/">ESL- English as a Second Language</a><br>
										<a href="https://bergen.edu/ce/courses-programs/fashion-design/">Fashion Design</a><br>
										<a href="https://bergen.edu/ce/courses-programs/health-professions/">Health Careers</a><br>
										<a href="https://bergen.edu/ce/courses-programs/hse-high-school-equivalency-for-adults/">High School Equivalency (HSE)</a><br>
										<a href="https://bergen.edu/ce/courses-programs/hospitality-culinary/">Hospitality and Culinary</a><br>
										<a href="https://bergen.edu/ce/courses-programs/interior-design/">Interior Design</a><br>
										<a href="https://bergen.edu/ce/courses-programs/manufacturing-logistics/">Manufacturing Bootcamp</a><br>
										<a href="https://bergen.edu/ce/courses-programs/languages-multicultural-learning/">Multi-Cultural Learning</a><br>
										<a href="https://bergen.edu/ce/courses-programs/project-management/">Project Management</a><br>
										<a href="https://bergen.edu/ce/courses-programs/real-estate/">Real Estate</a><br>
										<a href="https://bergen.edu/ce/courses-programs/teacher-education-and-childcare/">Teacher Education and Childcare</a>
									</p>
									<p>&nbsp;</p>
									<hr>
									<p>If you already have an account, please visit the Student Portal.</p>
									<h2><a href="https://us-elevate.elluciancloud.com/app/bergen/f?p=1202:LOGIN::::">Log into the Student Portal</a></h2>
								</div>
							</article>
						</section>
					</main>
				</div>
			</div>
		`;
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', injectCards);
	} else {
		injectCards();
	}
})();
