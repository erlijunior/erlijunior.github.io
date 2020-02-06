$(document).ready(function() {
  $(".testimonials-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1
  });
  $(".clients-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 6,
    responsive: {
      767: {
        items: 5
      }
    }
  });
});
