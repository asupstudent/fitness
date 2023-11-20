import {iosVhFix} from './utils/ios-vh-fix';
import {initYoutubeVideo} from './modules/inline-youtube/init-inline-youtube';
import {initTabs} from './modules/tabs/init-tabs';
import {initSliderJury} from './modules/sliders/init-slider-jury';
import {initSliderReviews} from './modules/sliders/init-slider-reviews';
import {initAccordions} from './modules/accordion/init-accordion';
import {initClickElementAccordion} from './modules/accordion/init-accordion-click';
import {Form} from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initYoutubeVideo();
    initTabs();
    initSliderJury();
    initAccordions();
    initClickElementAccordion();
    initSliderReviews();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
