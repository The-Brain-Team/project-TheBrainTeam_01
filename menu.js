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

const mobileHead = document.querySelector(`.mobile-header`);

window.addEventListener(`scroll`, function () {
  if (this.scrollY > 32) {
    mainHead.classList.add(`slidedown`);
  } else {
    mainHead.classList.remove(`slidedown`);
  }
});
