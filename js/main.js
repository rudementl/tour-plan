const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
  clickable: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  speed: 300,
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  console.log('clicked');
  document.querySelector('.nav-bottom').classList.toggle('nav-bottom--visible');
});
