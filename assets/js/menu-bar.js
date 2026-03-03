
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

// Fixed navbar ========
window.onscroll = function() {myFunction()};
var navbar = document.querySelector('.main-navbar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};
//navbar js//




