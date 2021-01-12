$(document).ready(function(){
  $('.main-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="main-slider--prev main-slider-arrow"><i class="ion-ios-arrow-left"></i></div>',
    nextArrow: '<div class="main-slider--next main-slider-arrow"><i class="ion-ios-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});