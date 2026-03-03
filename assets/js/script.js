$('.parallax-window').parallax({imageSrc: 'assets/images/Error/breadcrumbs.png'});
//modal and wow js file//
$(document).ready(function () {

  // WOW
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

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

