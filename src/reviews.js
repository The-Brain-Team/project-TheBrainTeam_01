if (window.innerWidth < 1280) {

$(".owl-carousel").owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  autoHeight: false,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1280: {
      items: 3
    }
  }
});
  }
