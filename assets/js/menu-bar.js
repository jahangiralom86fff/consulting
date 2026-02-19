//navbar js start//
$(document).ready(function(){	
	$(document).ready(function () {
		$('.mobile_menu').meanmenu({
			meanScreenWidth: "992",
			meanMenuContainer: ".mobile-menu",
			onePage: true,
		});
	});

});
//navbar End//

//navbar js//
const navbar = document.querySelector(".header .main-navbar");
function updateNavbar() {
    if (window.scrollY > 40) {
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "40px";
    }
};
window.addEventListener("load", updateNavbar);
window.addEventListener("scroll", updateNavbar);
//navbar js//


