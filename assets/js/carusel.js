
$('.carousel-one').owlCarousel({
  rtl: false,
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive:{
    0:{
        items: 2,
    },
    800:{
        items: 2,
    },
    992:{
        items: 3, 
    },
    1300:{
        items: 3,
    },
    1400:{
        items: 4,
    },
    1500:{
        items: 4,
    }
  }
});
$('.carousel-project').owlCarousel({
  rtl: false,
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2600,
  autoplayHoverPause: true,
  responsive:{
    0:{
        items: 1,
    },
    800:{
        items: 2,
    },
    992:{
        items: 3, 
    },
    1300:{
        items: 3,
    },
    1400:{
        items: 4,
    },
    1500:{
        items: 4,
    }
  }
});
$('.rs-carousel').owlCarousel({
  rtl: false,
  loop: true,
  margin: 0,
  nav: true,
  autoplay: false,
  autoplayTimeout: 2600,
  autoplayHoverPause: true,
  responsive:{
    0:{
        items: 1,
    },
    800:{
        items: 2,
    },
    992:{
        items: 2, 
    },
    1300:{
        items: 3,
    },
    1400:{
        items: 3,
    },
    1500:{
        items: 3,
    }
  }
});

//slick slider js*//
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$(document).on('ready', function () {
// initialization of slick carousel
$.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
});
//slick slider End*/

//fancybox//
Fancybox.bind("[data-fancybox]", {  
});
//fancybox//
