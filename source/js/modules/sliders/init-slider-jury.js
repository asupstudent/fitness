const sliderJury = document.querySelector('.jury__swiper');
const buttonNext = document.querySelector('.jury__button--next');
const buttonPrev = document.querySelector('.jury__button--prev');

const initSliderJury = () => {
  if (sliderJury) {
    // eslint-disable-next-line
    new Swiper(sliderJury, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderJury};
