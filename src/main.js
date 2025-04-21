const menuOpen = document.getElementById('menu-open');

const menu = document.getElementById('menu');

const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', function () {
  menu.classList.add('is-open-menu');
});

menuClose.addEventListener('click', function () {
  menu.classList.remove('is-open-menu');
});

const mainHead = document.querySelector(`.header`);

window.addEventListener(`scroll`, function () {
  if (this.scrollY > 32) {
    mainHead.classList.add(`slidedown`);
  } else {
    mainHead.classList.remove(`slidedown`);
  }
});

if (window.innerWidth < 1280) {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    stagePadding: 0,
    margin: 24,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  });
}
