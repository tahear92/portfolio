const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('navbar');

window.onload = function () {
    window.addEventListener ("scroll", function() {
        header.classList.toggle ("sticky", this.window.scrollY > 0);

        if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
    });

	// window.addEventListener('scroll', function (e) {
	// 	if (window.pageYOffset > 100) {
	// 		document.querySelector("header").classList.add('is-scrolling');
	// 	} else {
	// 		document.querySelector("header").classList.remove('is-scrolling');
	// 	}
	// });

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	})
    
}

document.querySelectorAll(".mobile-nav").forEach(n => n. addEventListener("click", () => {
    menu_btn.classList.remove("active");
    mobile_menu.classList.remove("active");
}))




