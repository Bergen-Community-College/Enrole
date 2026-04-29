// Polyfills
// =========
if (!String.prototype.startsWith) {
	Object.defineProperty(String.prototype, 'startsWith', {
		value: function(search, rawPos) {
			pos = rawPos > 0 ? rawPos|0 : 0;
			return this.substring(pos, pos + search.length) === search;
		}
	});
}

// Relink header logo to ProEd main website
document.querySelector('#header_title a').setAttribute('href', 'https://proed.erau.edu/');

var breadcrumbs = document.getElementById('breadcrumbTop');

// Move search to left nav
var search = document.getElementById('search');
var popularContainer = document.getElementById('popularContainer');
popularContainer.insertBefore(search, popularContainer.children[0]);
var topBar = document.getElementById('topBar');
// Move desktop-only class from breadCrumbs to topBar
breadcrumbs.className = '';
topBar.className = 'desktop-only';

// Show breadcrumbs only when Home isn't the only link
if (breadcrumbs.children.length > 1) {
	breadcrumbs.style.visibility = 'visible';
} else {
	topBar.remove();
}

// Hide "Times:" row when schedule says "Self-paced" 
if (typeof jQuery !== 'undefined') {
	jQuery('td.tableheading:contains(Schedule:)').next('td:contains(Self-paced)').closest('table').find('td.tableheading:contains(Times:)').closest('tr').css('display', 'none');
}

// Test environment only
// =====================
if (location.pathname.startsWith('/testerau/')) {
	// Replace all test links
	var test_links = document.querySelectorAll('a[data-test-href]');
	for (var i = test_links.length - 1; i >= 0; i--) {
		test_links[i].setAttribute('href', test_links[i].getAttribute('data-test-href'));
	}

}

/* 
 * @Description: This script should be placed directly after the <body> tag.
 * @Usage: <script type="text/javascript" src="wrapper.js" id="erau-wrapper-script" hide-header="true" campus="prescott"></script>
 * @Attributes:
 * campus (may be daytona-beach, prescott, worldwide)
 * hide-header (default: false)
 * container-width (default: 1140px)
 * container-padding (default: 30px)
 * the following links may be customized
 * 	emergency-link, directory-link, title-ix-link, military-link, privacy-link, terms-link, sitemap-link, feedback-link
 */

(function () {

	let tag = document.getElementById('erau-wrapper-script') || document.createElement('div'),
		hide_erau_header = tag.getAttribute("hide-header") || false,
		campus = tag.getAttribute('campus'),
		custom_links = tag.getAttribute('custom-links'),
		header_placement = tag.getAttribute('header-placement'),
		footer_placement = tag.getAttribute('footer-placement'),
		header_classes = tag.getAttribute('header-classes'),
		container_width = tag.getAttribute('container-width') || '1140px',
		container_padding = tag.getAttribute('container-padding') || '30px',
		emergency_link = tag.getAttribute('emergency-link') || '<a href="//erau.edu/emergency">Emergency Info</a>',
		directory_link = tag.getAttribute('directory-link') || '<a href="//erau.edu/leadership/directory/">Directory</a>',
		title_ix_link = tag.getAttribute('title-ix-link') || '<a href="//erau.edu/leadership/title-ix/">Civil Rights Equity&nbsp;&amp; Title&nbsp;IX</a>',
		military_link = tag.getAttribute('military-link') || '<a href="//erau.edu/terms-use#military-disclaimer">Military Disclaimer</a>',
		privacy_link = tag.getAttribute('privacy-link') || '<a href="//erau.edu/privacy-statement">Privacy Statement&nbsp;&amp; GDPR</a>',
		terms_link = tag.getAttribute('terms-link') || '<a href="//erau.edu/terms-use">Terms of Use&nbsp;&amp; Accessibility</a>',
		sitemap_link = tag.getAttribute('sitemap-link') || '',
		feedback_link = tag.getAttribute('feedback-link') || '',
		separator = tag.getAttribute('separator') || '|',
		random_id = Math.random().toString(36).replace(/^0\./, '_');

	// Footer Column Links
	let campuses = [
		'<a href="//daytonabeach.erau.edu">Daytona Beach, FL Campus</a>',
		'<a href="//prescott.erau.edu">Prescott, AZ Campus</a>',
		'<a href="//worldwide.erau.edu">Worldwide Campus</a>',
		'<a href="//worldwide.erau.edu/online-learning">Online Campus</a>',
		'<a href="//asia.erau.edu">Asia Campus</a>'
	];
	let col_1 = [
		'<a href="//erau.edu/libraries">Libraries</a>',
		'<a href="//commons.erau.edu/">Scholarly Commons</a>',
		'<a href="//erau.edu/research">Research</a>',
		'<a href="//faculty.erau.edu/">Faculty Directory</a>',
		'<a href="//catalog.erau.edu/">Course Catalog</a>'
	];
	let col_2 = [
		'<a href="//careerservices.erau.edu/">Career Services</a>',
		'<a href="//alumni.erau.edu/">Alumni Association</a>',
		'<a href="//lift.erau.edu/">Lift Magazine</a>',
		'<a href="//givingto.erau.edu/">Giving to Embry-Riddle</a>',
		'<a href="//www.givecampus.com/schools/EmbryRiddleAeronauticalUniversity">Crowdfunding</a>',
		'<a href="//erau.edu/fellowships">Awards and Fellowships</a>'
	];
	let col_3 = [
		'<a href="//proed.erau.edu/">Professional Education</a>',
		'<a href="//erau.edu/degrees/k-12-summer-programs">K-12 / Dual Enrollment / Summer&nbsp;Camps</a>',
		'<a href="//erau.edu/athletics">Athletics</a>',
		'<a href="//erau.edu/leadership/president/presidential-speaker-series">Speaker Series</a>',
		'<a href="//erau.edu/international-education">International Education</a>'
	];
	let col_4 = [
		'<a href="//careers.erau.edu/">Working at Embry-Riddle</a>',
		'<a href="//trustees.erau.edu/">Board of Trustees</a>',
		'<a href="//erau.edu/continuous-improvement/accreditation">Accreditation</a>',
		'<a href="//erau.edu/leadership/consumer-information">Consumer Information</a>'
	];

	// Footer Links
	switch (campus) {
		case "daytonabeach":
		case "daytona-beach":
			if (location.hostname == 'daytonabeach.erau.edu') {
				sitemap_link = '<a href="//daytonabeach.erau.edu/site-map">Sitemap</a>';
				feedback_link = '<a href="//daytonabeach.erau.edu/feedback">Web Feedback</a>';
			}
			var info_links = 
				[
					sitemap_link,
					directory_link,
					feedback_link
				]
			var legal_links = 
				[
					emergency_link,
					title_ix_link,
					military_link,
					privacy_link,
					terms_link
				]
			var footer_address = '1 Aerospace Boulevard<br>Daytona Beach,&nbsp;FL 32114-3900';
			break;
		case "prescott":
			if (location.hostname == 'prescott.erau.edu') {
				sitemap_link = '<a href="//prescott.erau.edu/site-map">Sitemap</a>';
				feedback_link = '<a href="//prescott.erau.edu/feedback">Web Feedback</a>';
			}
			var info_links = 
				[
					sitemap_link,
					directory_link,
					feedback_link
				]
			var legal_links = 
				[
					emergency_link,
					title_ix_link,
					military_link,
					privacy_link,
					terms_link
				]
			var footer_address = '3700 Willow Creek&nbsp;Road<br>Prescott,&nbsp;AZ 86301-3720';
			break;
		case "worldwide":
			if (location.hostname == 'worldwide.erau.edu') {
				sitemap_link = '<a href="//worldwide.erau.edu/site-map/">Sitemap</a>';
				feedback_link = '<a href="//worldwide.erau.edu/feedback/">Web Feedback</a>';
			}
			var info_links = 
				[
					sitemap_link,
					directory_link,
					feedback_link,
					'<a href="//worldwide.erau.edu/administration/contact/">Contact</a>'
				]
			var legal_links = 
				[
					emergency_link,
					title_ix_link,
					military_link,
					privacy_link,
					terms_link
				]
			var footer_address = '1 Aerospace Boulevard<br>Daytona Beach,&nbsp;FL 32114-3900';
			break;
		default:
			var info_links = [
				]
			var legal_links = 
				[
					emergency_link,
					directory_link,
					title_ix_link,
					military_link,
					privacy_link,
					terms_link
				]
			var footer_address = '1 Aerospace Boulevard<br>Daytona Beach,&nbsp;FL 32114-3900';
	}

	// Reduce arrays
	info_links = info_links.filter(function(e){return e});
	legal_links = legal_links.filter(function(e){return e});

	// If info_links array has just 0-1 links, merge it into legal_links
	if (info_links.length < 2) {
		legal_links = info_links.concat(legal_links);
		info_links = [];
	}

	if (custom_links == "true" || custom_links == "") {
	} else if (custom_links !== null && custom_links !== "false") {
		var footer_links = custom_links;
	}

	// Header Host
	let header_host = document.createElement('div');
	header_host.style = 'clear: both;';
	// let header = header_host.attachShadow({mode: 'open'});
	let header = header_host;

	if (!hide_erau_header) {
		let show_give = tag.getAttribute('show-give') || false,
			show_portal = tag.getAttribute('show-portal') || false;

		// Header CSS
		let header_style = document.createElement('style');
		header_style.textContent = replace_random_id(`
			#RANDOM_ID_topbar {
				display: none;
			}
			.RANDOM_ID_icon {
				fill: currentColor;
				width: 1em;
			}
			.RANDOM_ID_icon.RANDOM_ID_margin_right {
				margin-right: 0.45em;
			}
			@media only screen and (min-width: 768px) {
				#RANDOM_ID_topbar {
					display: block;
					position: relative;
					z-index: 2;
					font-family: Roboto, Arial, sans-serif;
					font-size: 0.8rem;
					padding: 12px ` + container_padding + `;
					background: #002a50;
				}
				#RANDOM_ID_topbar ul {
					display: flex;
					justify-content: flex-end;
					gap: 1.25rem;
					list-style: none;
					margin: 0 auto;
					padding: 0;
					max-width: ` + container_width + `;
				}
				#RANDOM_ID_topbar a {
					color: #fff;
					font-weight: bold;
					text-decoration: none;
				}
				#RANDOM_ID_topbar a:hover, #RANDOM_ID_topbar a:focus-visible {
					color: #8cddff;
					text-decoration: underline;
				}
			}
		`);
		header.appendChild(header_style);

		// Header DIV
		let header_div = document.createElement('div');
		header_div.innerHTML = replace_random_id(`
			<div id="RANDOM_ID_topbar">
				<ul>` +
					(show_give ? '<li><a href="//givingto.erau.edu/"><span>Give to ERAU</span></a></li>' : '') +
					(show_portal ? '<li><a href="//ernie.erau.edu"><svg class="RANDOM_ID_icon RANDOM_ID_margin_right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 64c44.2 0 80 35.8 80 80v48H144V144c0-44.2 35.8-80 80-80zM80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H368V144C368 64.5 303.5 0 224 0S80 64.5 80 144zM256 320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg><span>ERNIE</span></a></li>' : '') + `
					<li><a href="//erau.edu/"><span>Embry-Riddle Home</span></a></li>
				</ul>
			</div>
		`);
		header.appendChild(header_div);
	}

	// Footer Host
	let footer_host = document.createElement('div');
	footer_host.style = 'clear: both;';
	// let footer = footer_host.attachShadow({mode: 'open'});
	let footer = footer_host;

	// Footer CSS
	let footer_style = document.createElement('style');
	footer_style.textContent = replace_random_id(`
		#RANDOM_ID_footer {
			line-height: 1.35;
			font-size: 0.8rem;
		}
		#RANDOM_ID_footer .RANDOM_ID_icon {
			fill: currentColor;
			width: 1em;
		}
		#RANDOM_ID_footer .RANDOM_ID_sep {
			opacity: 0.5;
		}
		#RANDOM_ID_footer a {
			text-decoration: none;
			font-weight: 700;
			color: #e8e8e8;
			display: inline-block;
			text-decoration-line: underline;
			text-decoration-color: transparent;
			text-underline-offset: 0.2rem;
			text-decoration-thickness: 2px;
		}
		#RANDOM_ID_footer a:hover,
		#RANDOM_ID_footer a:focus-visible {
			color: #ffcb09;
			text-decoration-line: underline;
			text-decoration-color: #0062bd;
		}
		.RANDOM_ID_container {
			max-width: ` + container_width + `;
			padding: 0 ` + container_padding + `;
			margin: auto;
		}
		#RANDOM_ID_links {
			background-color: #172e6d;
			color: #a5a5a5;
		}
			#RANDOM_ID_toggle {
				display: flex;
				position: relative;
				z-index: 0;
				width: 100%;
				align-items: center;
				gap: 15px;
				font-size: 1.25em;
				font-family: inherit;
				justify-content: center;
				font-weight: normal;
				padding: 20px 15px;
				background: rgba(0, 0, 0, .1);
				border: 0;
				color: #d6d6d6;
				cursor: pointer;
			}
			#RANDOM_ID_toggle::before, #RANDOM_ID_toggle::after {
				display: block;
				content: '';
				height: 5px;
				flex: 1;
				max-width: 200px;
				background: #03539e
			}
			#RANDOM_ID_toggle:hover::before,
			#RANDOM_ID_toggle:focus::before,
			#RANDOM_ID_toggle:hover::after,
			#RANDOM_ID_toggle:focus::after {
				background: #ffcb06;
			}
			#RANDOM_ID_toggle[aria-expanded='true'] .RANDOM_ID_icon.down,
			#RANDOM_ID_toggle[aria-expanded='false'] .RANDOM_ID_icon.up {
				display: none
			}
			#RANDOM_ID_toggle:not([aria-expanded='true']) ~ #RANDOM_ID_expandable {
				display: none;
			}
			#RANDOM_ID_button_text {
				display:flex;
				gap: 0.5rem;
			}
			#RANDOM_ID_expandable {
				display: grid;
				grid-template-columns: 1fr 2px 1fr;
				grid-auto-rows: auto 2px;
				gap: 1rem;
				text-align: center;
				padding-top: 30px;
				padding-bottom: 30px;
			}
			#RANDOM_ID_expandable hr {
				background-color: #27519f;
				border-style: none;
				margin: 0;
				padding: 0;
				height: auto;
				width: auto;
			}
			@media (max-width: 699px) {
				#RANDOM_ID_expandable > *:nth-child(3),
				#RANDOM_ID_expandable > *:nth-child(4) {
					display: none;
				}
				#RANDOM_ID_expandable > *:nth-child(6),
				#RANDOM_ID_expandable > *:nth-child(7),
				#RANDOM_ID_expandable > *:nth-child(8) {
					grid-column: 1 / -1;
				}
			}
			@media (min-width: 700px) and (max-width: 999px) {
				#RANDOM_ID_expandable {
					grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr 2px 1fr;
				}
				#RANDOM_ID_expandable > ul {
					grid-column: span 3;
				}
				#RANDOM_ID_expandable > hr:nth-child(6) {
					grid-column: 1 / -1;
				}
				#RANDOM_ID_expandable > ul:nth-child(9) {
					grid-column: 3 / 6;
				}
				#RANDOM_ID_expandable > *:nth-child(7),
				#RANDOM_ID_expandable > *:nth-child(8) {
					display: none;
				}
			}
			@media (min-width: 1000px) {
				#RANDOM_ID_expandable {
					grid-template-columns: 1fr 2px 1fr 2px 1.25fr 2px 1fr 2px 1fr;
				}
				#RANDOM_ID_expandable > *:nth-child(3),
				#RANDOM_ID_expandable > *:nth-child(4) {
					display: none;
				}
			}
			#RANDOM_ID_links ul {
				list-style: none;
				margin: 0;
				padding: 0;
				align-self: center;
			}
			#RANDOM_ID_links li {
				padding: 7px 0;
			}
		#RANDOM_ID_copyright_row {
			background-color: #000e2e;
			color: #fff;
			padding: 20px 30px;
			text-align: center;
		}
		#RANDOM_ID_copyright_row a {
			color: #ffcb06;
		}
		#RANDOM_ID_copyright_row a:hover,
		#RANDOM_ID_copyright_row a:focus-visible {
			color: #fff;
		}
		#RANDOM_ID_copyright_row > * {
			margin: 1.5rem 0;
		}
		#RANDOM_ID_copyright_row ul {
			list-style: none;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 0.375rem 0.7rem;
			padding: 0;
		}
		#RANDOM_ID_logo_row {
			display: grid;
			gap: 1.2rem 20px;
			grid-auto-flow: dense;
			align-items: center;
		}
			#RANDOM_ID_logo_row p {
				margin: 0;
			}
			#RANDOM_ID_logo a {
				color: #fff;
			}
			#RANDOM_ID_logo a:hover,
			#RANDOM_ID_logo a:focus-visible {
				color: #b3b3b3;
			}
			#RANDOM_ID_logo .RANDOM_ID_icon {
				width: 70px;
			}
		@media (min-width: 530px) {
			#RANDOM_ID_offices {
				text-align: right;
			}
			#RANDOM_ID_copyright {
				text-align: left;
			}
		}
		@media (min-width: 530px) and (max-width: 827px) {
			#RANDOM_ID_logo_row {
				grid-template-columns: 1fr 1fr;
			}
			#RANDOM_ID_logo {
				grid-column: 1 / -1;
			}
		}
		@media (min-width: 828px) {
			#RANDOM_ID_logo_row {
				gap: 1.5rem 30px;
				grid-template-columns: 1fr auto 1fr;
			}
			#RANDOM_ID_logo {
				grid-column: 2;
			}
		}
		ul#RANDOM_ID_social {
			gap: 0.2rem;
			line-height: 0;
		}
		#RANDOM_ID_social .RANDOM_ID_icon {
			width: 1.6em;
			height: 1.6em;
			margin: 0.7em;
		}
			#RANDOM_ID_social a {
				color: #cecece;
				border-radius: 0.3rem;
			}
			#RANDOM_ID_social a:hover,
			#RANDOM_ID_social a:focus-visible {
				color: #ffcb06;
				background-color: #011b40;
			}
	`);
	footer.appendChild(footer_style);

	// Prepare Footer HTML
	let footer_html = `
		<footer id="RANDOM_ID_footer" aria-label="Legal details and links to other Embry-Riddle websites">
			<div id="RANDOM_ID_links">
				<button id="RANDOM_ID_toggle" type="button" aria-controls="RANDOM_ID_expandable" aria-expanded="false">
					<div id="RANDOM_ID_button_text">
						University Links 
						<svg class="RANDOM_ID_icon down" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
						<svg class="RANDOM_ID_icon up" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
					</div>
				</button>
				<div id="RANDOM_ID_expandable" class="RANDOM_ID_container">` +
					list(col_1) + '<hr>' +
					list(campuses, 'Embry-Riddle Campuses') + '<hr>' +
					list(col_2) + '<hr>' +
					list(campuses, 'Embry-Riddle Campuses') + '<hr>' +
					list(col_3) + '<hr>' +
					list(col_4) + `
				</div>
			</div>
			<div id="RANDOM_ID_copyright_row">
				<div id="RANDOM_ID_logo_row">
					<p id="RANDOM_ID_logo"><a href="//erau.edu">
						<svg class="RANDOM_ID_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M333 239c12.9-17 27.2-33.5 62.6-54.9c35.4-21.4 63.1-31.8 78.9-33.2c-1.8-2.8-5-6.6-23.5-2.8s-58.4 15.1-58.4 15.1s21.1-12 31.6-16.3c10.5-4.3 32.7-12.1 35.2-12.4c-1.9-3.1-12.5-6.4-27.4-2.7c-27.4 6.8-60.2 23.4-60.2 23.4l55.7-35.9c-2.9-2.9-10.1-2-23.1 2.4s-47.2 22-47.2 22c6.4-7.3 24.8-23.9 35.9-30.3c-3-3.2-10.7-.3-13.3 .4c-8.4 2.5-33.5 14.6-42.7 16.6c1.3-1.7 11.1-10.5 11.8-11.6c-5.1-2.1-6.4-2.7-13.2-.4c-10.3 3.5-43.8 28.7-53.2 43.3c-16.3 4.7-58.2 29.4-86.1 93.2c-4.5-11-12.3-40.7-7.8-85.1c0 0-5-9.2-11.6-25.2s-46.9-118.4-39.2-141.6c-3.1 1.3-5.3 4.6-7.7 10.8c-4.8 12.1-7.7 33.8-1.5 62.3c0 0-22.5-35-26.1-68.7c-5.3 8.9-8.2 12.3-8.9 27.7c-.6 14.4 2.7 39.5 11.2 56.5c0 0-22.4-32-26.4-40.1c-3.9-8.1-4.9-11.3-4.9-11.3c-2.9 3.4-4.5 8-5.1 14c-.8 8.3 6.1 50.6 23.1 74.9c0 0-14.8-15.2-24-27.5c-9.2-12.2-20.8-28.6-20.8-28.6c-1.2 5-1.1 3.4-1.8 13.7c-1 14.7 14 52.1 30.9 68c-3.3-1.5-36.1-28.3-39.2-30.5c-.2 6.5 1.7 25.6 17.2 42.6c15.5 17 22 24.4 22 24.4c-2.4-1.5-17.8-10.6-19.2-11.6c1.3 4.9 3.9 12.3 5.5 15.4c1.6 3 6.5 13.5 20.1 25.3c-2.6-.6-15.3-3.6-19.6-14.3c.4 6.9 1.4 17.6 13.1 30.6c3.4 8.8 29.2 82.4 54.7 97.2c-.5 1.2-1.5 3.5-1.5 3.5c-29.7 10.6-79.9 14.6-110.2 10.8c2.1 2.8 5 7.3 8.8 12.7l39.6-3.4-36.9 7.2c2.2 3 4.7 6.3 7.5 9.6l36.2-10.9-32.5 15.1c2.5 2.8 5.3 5.7 8.3 8.6l32.2-16.9-28.6 20.1c2.6 2.3 5.3 4.6 8.2 6.8l32.2-18.5-28.2 21.5c3.4 2.4 7.1 4.8 10.9 7l30.1-20.8-23.3 24.4c3.3 1.7 6.6 3 10.3 4.5c1.9 .7 27.5-24.3 27.5-24.3s-17.7 27.6-16.2 28.1c2.9 .9 6.2 1.5 9.3 2.2c1.9 .4 20.8-27.9 20.8-27.9s-10.4 27.5-10.3 29.5c3.3 .4 6.3 1.1 9.8 1.3l14.2-28.3 9.1-.3s3.7 21.5 5.7 25.6c2 4 16.8 5.7 22.9 5.4l16.2 9.7c4 .6 8.5 1.9 8.8 4.5s-4.4 6.1-4.8 10.7s-3.4 15.3-4.2 19.6s8.6 8.2 12.9 9.4l-2.9-11.6 7.8-10.3 28.4 17.8 .2 8.9s1.9 .4 7-6.6c7.3-10-18.5-23.7-18.5-23.7l17.3 1.9 3.8 9.2s.7 1.3 2.8-7.6s-27.9-17.6-33.6-20.1s-7.9-7.7-7.9-7.7s2.3-2.3 3-3.6c1.2-2 .2-3.3-2.1-6.6c-2.4-3.3-1.5-2.6-10.1-6.8c-8.7-4.2-15-1.5-6.3-17.4c0 0-3.6 9.2-2.5 11.3s7.4 3.9 12.5 6s6.8 3.4 9.1 7.9c4.6 8.7 19.5 12.2 22.2 15.2c7.1 7.8 22.7 19 32.8 23c8.3 3.3 12.6 21.6 12.6 21.6s-1.8 5.7-4.6 10.6c-2.8 4.9-2.3 7.5-1.4 9.8s6.2 5.1 9.7 6.6l-1.4-10.4 9.2-9.7 35.2 10.7c.8 3.4 1.9 10.1 1.9 10.1s4-1.1 8.3-9.6s-31-20.1-36.5-22.1c26-6.5 33.5-1.9 33.5-1.9s3.9 4.8 4.5 8c0 0 2.2-1.2 3.8-12.7s-43.9-3.7-50.9-4c-2.1-1.7-9.6-11.6-9.3-20.4c.2-8.8-3.9-9-9.7-15.5s-20.6-23.4-21.8-31.6s-2.6-12.2 8.2-17.9s24.2-11.9 24.2-11.9l-.6 2.5s48.4-21.5 59.4-17c7.2 2.9 6.2 5.1 6.5 7.1c13.2-20.7-14.9-24.4-20.3-26.2c.5-5.1-1-11-14.6-13.1s-34.7-4.3-34.7-4.3l.9 1.4s-36-2-41.7-2.4c-5.7-.5-17.9-2.3-17.9-2.3s45.4-17.7 55.7-26.3s33.6-32.6 46.5-49.6m-.3 90.8c1.2 .8 1 1.9 0 3.9l-14.9-4.4c.7 0 13.7-.2 14.9 .5"/></svg>
						<br>erau.edu</a>
					</p>
					<p id="RANDOM_ID_offices">
						Admin Offices: ` +
							footer_address + `
					</p>
					<p id="RANDOM_ID_copyright">
						&copy; Embry-Riddle Aeronautical&nbsp;University. 
						<br>All rights reserved.
					</p>
				</div>` + 
				list(legal_links, null, separator) +
				list(info_links, null, separator) + `
				<ul id="RANDOM_ID_social" aria-label="Embry-Riddle Social Media Pages">
					<li><a href="//www.facebook.com/EmbryRiddleUniversity" aria-label="Facebook">
						<svg class="RANDOM_ID_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
					</a></li>
					<li><a href="//twitter.com/EmbryRiddle" aria-label="X">
						<svg class="RANDOM_ID_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
					</a></li>
					<li><a href="//www.youtube.com/user/EmbryRiddleUniv" aria-label="YouTube">
						<svg class="RANDOM_ID_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
					</a></li>
					<li><a href="//www.linkedin.com/edu/school?id=18085" aria-label="LinkedIn">
						<svg class="RANDOM_ID_icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					</a></li>
				</ul>
			</div>
		</footer>
	`;

	// Footer DIV
	let footer_div = document.createElement('div');
	footer_div.innerHTML = replace_random_id(footer_html);
	footer.appendChild(footer_div);

	// Wait for DOM to be loaded before appending header or footer.
	if (document.readyState === 'loading') {
		// Loading hasn't finished yet
		document.addEventListener('DOMContentLoaded', add_wrapper);
	} else {
		// `DOMContentLoaded` has already fired
		add_wrapper();
	}

	function replace_random_id(text) {
		return text.replaceAll(/RANDOM_ID/g, random_id);
	}

	function list(links, label, sep) {
		let html = '';
		for (var i = 0; i < links.length; i++) {
			if (i !== 0 && sep !== null && sep !== undefined) {
				html += '<span class="RANDOM_ID_sep" aria-hidden="true">' + sep + '</span>';
			}
			html += '<li>' + links[i] + '</li>';
		}
		if (html == '') {
			return '';
		}
		html = '<ul' + (label ? ' aria-label="' + label + '"' : '') + '>' + html + '</ul>';
		return replace_random_id(html);
	}

	function add_wrapper() {
		if (!hide_erau_header) {
			if (header_placement !== null && header_placement !== '') {
				var header_placement_segments = header_placement.split(' ');
				var location = header_placement_segments[header_placement_segments.length-1];

				if (location == header_placement) {
					// No first parameter provided. Treat header_placement as ID.
					applyHeader(location);
				} else {
					switch (header_placement_segments[0]) {
						case 'before':
							applyHeader(location, 'before');
							break;
						case 'prepend':
							applyHeader(location, 'prepend');
							break;
						case 'append':
							applyHeader(location, 'append');
							break;
						default:
							applyHeader(location, 'after');
					}
				}
			} else {
				// Default header location: inject to #entirety if present, otherwise start of page
				applyHeader('entirety');
			}
		}
		if (footer_placement !== null && footer_placement !== '') {
			var footer_placement_segments = footer_placement.split(' ');
			var location = footer_placement_segments[footer_placement_segments.length-1];

			if (location == footer_placement) {
				// No first parameter provided. Treat footer_placement as ID.
				applyFooter(location);
			} else {
				switch (footer_placement_segments[0]) {
					case 'before':
						applyFooter(location, 'before');
						break;
					case 'prepend':
						applyFooter(location, 'prepend');
						break;
					case 'append':
						applyFooter(location, 'append');
						break;
					default:
						applyFooter(location, 'after');
				}
			}
		} else {
			// Default footer location: inject to #entirety if present, otherwise end of page
			applyFooter('entirety');
		}


		// Enable footer menu on mobile.
		addEvent(footer.querySelector(replace_random_id('#RANDOM_ID_toggle')), 'click', toggleFooter_links);

		// Hit escape to return to toggle
		addEvent(footer.querySelector(replace_random_id('#RANDOM_ID_expandable')), 'keyup', function(event) {
			if (event.key === 'Escape') {
				let toggle = footer.querySelector(replace_random_id('#RANDOM_ID_toggle'));
				toggle.setAttribute('aria-expanded', 'false');
				toggle.focus();
			}
		});
	};

	function addEvent(element, eventName, func) {
		if (element) {
			if (element.addEventListener) {
				return element.addEventListener(eventName, func, false);
			} else if (element.attachEvent) {
				return element.attachEvent('on' + eventName, func);
			}
		}
	};

	function toggleFooter_links() {
		let toggle = footer.querySelector(replace_random_id('#RANDOM_ID_toggle'));
		let state = toggle.getAttribute('aria-expanded');
		if (state == 'true') {
			toggle.setAttribute('aria-expanded', 'false');
			toggle.focus();
		} else {
			toggle.setAttribute('aria-expanded', 'true');
			footer.querySelector(replace_random_id('#RANDOM_ID_expandable')).querySelector('a').focus();
		}
		toggle.setAttribute('aria-expanded', (state == 'true' ? 'false' : 'true'));
	}
	function toggleClass(toggleClass,el) {
	  var current = el.className.split(/\s+/)
		 ,exist   =  ~current.indexOf(toggleClass)
	  current.splice(exist ? current.indexOf(toggleClass) : 0,
					 exist ? 1 : 0, 
					!exist ? toggleClass : null);
	  el.className = current.join(' ').trim();
	}

	function applyHeader(id,position) {
		if (document.getElementById(id)) {
			if (document.getElementById(id) instanceof Object) {
				switch (position) {
					case 'before':
						document.getElementById(id).parentNode.insertBefore(header_host, document.getElementById(id));
						break;
					case 'prepend':
						document.getElementById(id).insertBefore(header_host,document.getElementById(id).firstChild);
						break;
					case 'append':
						document.getElementById(id).appendChild(header_host);
						break;
					default:
						document.getElementById(id).parentNode.insertBefore(header_host, document.getElementById(id));
				}
			} else {
				document.body.insertBefore(header_host, document.body.firstChild);
			}
		} else {
			document.body.insertBefore(header_host, document.body.firstChild);
		}
	}
	function applyFooter(id,position) {
		if (document.getElementById(id)) {
			if (document.getElementById(id) instanceof Object) {
				switch (position) {
					case 'before':
						document.getElementById(id).parentNode.insertBefore(footer_host, document.getElementById(id));
						break;
					case 'prepend':
						document.getElementById(id).insertBefore(footer_host,document.getElementById(id).firstChild);
						break;
					case 'append':
						document.getElementById(id).appendChild(footer_host);
						break;
					default:
						document.getElementById(id).parentNode.insertBefore(footer_host, document.getElementById(id).nextSibling);
				}
			} else {
				document.body.appendChild(footer_host);
			}
		} else {
			document.body.appendChild(footer_host);
		}
	}

})();