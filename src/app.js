const headerElement = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('navbar');
const hamburger_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const listItems = document.querySelectorAll(".mobile-nav .list li")

window.onload = function () {
	// Toggle classes in header on scrolling
    window.addEventListener ("scroll", function() {
        headerElement.classList.toggle ("sticky", this.window.scrollY > 0);

        if (window.pageYOffset > 100) {
			headerElement.classList.add('is-scrolling');
		} else {
			headerElement.classList.remove('is-scrolling');
		}
    });

	// Toggle classes on hamburger button and mobile menu on button click
	hamburger_btn.addEventListener('click', function () {
		hamburger_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	})

	// Close mobile menu on item click
	listItems.forEach(listItem => listItem.addEventListener("click", () => {
		hamburger_btn.classList.remove("is-active");
		mobile_menu.classList.remove("is-active");
	}))
}
