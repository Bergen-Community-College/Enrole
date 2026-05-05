

function injectSidebarMenu() {
	var leftMenus = document.querySelectorAll('.leftMenu');
	if (leftMenus.length < 2) return;

	var wrapper = document.createElement('div');
	wrapper.className = 'leftMenu';
	wrapper.innerHTML = `
		<aside id="nav_menu-6" class="widget widget_nav_menu">
			<div class="menu-bergen-ce-clone-container">
				<ul id="menu-bergen-ce-clone" class="menu">
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="?categoryId=FC89CDF8">Bergen for Business</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://bergen.edu/ce/bergen-for-business/">Bergen for Business</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://bergen.edu/ce/courses-programs/">Courses and Programs</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://bergen.edu/ce/general-information-and-policies/">General Information and Policies</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://bergen.edu/ce/ce-staff-directory/">Staff Directory</a></li>
					<li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://bergen.edu/ce/teaching-opportunities-proposals/">Teaching Opportunities/Proposals</a></li>
				</ul>
			</div>
		</aside>
	`;

	leftMenus[1].parentNode.insertBefore(wrapper, leftMenus[1]);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', injectSidebarMenu);
} else {
	injectSidebarMenu();
}