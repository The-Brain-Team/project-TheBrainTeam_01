const menuOpen = document.getElementById('menu-open');

const menu = document.getElementById('menu');

const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', function () {
  menu.classList.add('is-open-menu');
});

menuClose.addEventListener('click', function () {
  menu.classList.remove('is-open-menu');
});