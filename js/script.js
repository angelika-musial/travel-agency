document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function updateShadow() {
		if (window.scrollY >= 200 || navList.classList.contains('show')) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navList.addEventListener('show.bs.collapse', () =>
		nav.classList.add('shadow-bg')
	);
	navList.addEventListener('hidden.bs.collapse', updateShadow);

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
			updateShadow();
		})
	);

	document.addEventListener('click', (e) => {
		const isClickInsideNav = nav.contains(e.target);
		const isMenuOpen = navList.classList.contains('show');

		if (!isClickInsideNav && isMenuOpen) {
			navList.classList.remove('show');
			updateShadow();
		}
	});

	window.addEventListener('scroll', updateShadow);

	updateShadow();
});
