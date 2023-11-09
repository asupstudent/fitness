const sliderReviews = document.querySelector('[data-reviews="reviews"]');
const buttonNext = document.querySelector('[data-button="next-reviews"]');
const buttonPrev = document.querySelector('[data-button="prev-reviews"]');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initSliderReviews};
