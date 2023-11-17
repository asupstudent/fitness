const sliderJury = document.querySelector('[data-jury="jury"]');
const buttonNext = document.querySelector('[data-button="next-jury"]');
const buttonPrev = document.querySelector('[data-button="prev-jury"]');

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
          initialSlide: 2,
          slidesPerView: 2,
          spaceBetween: 32,
        },

        320: {
          initialSlide: 2,
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSliderJury};
