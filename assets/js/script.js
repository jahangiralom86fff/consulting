

$(document).ready(function () {
    // WOW
	if (typeof WOW !== "undefined") {
		new WOW().init();
	}
  	//wow js init end//

	//counter all use//
	$(document).ready(function(){
		$('.count').counterUp({
		delay:10,
		time:1000
		});
	});
	//counter end//
	
	//img parallax banner//
	$('.parallax-window').parallax({imageSrc: 'assets/images/Error/breadcrumbs.png'});
	//img paralllax end//

	//img parallax banner//
	$('.parallax-to').parallax({imageSrc: 'assets/images/project/project-bottom.png'});
	//img paralllax end//

});
//modal and wow js file//
$(document).ready(function () {

  // Bootstrap Modal
  const myModal = document.getElementById('myModal');
  const myInput = document.getElementById('myInput');

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }
});

//End//

