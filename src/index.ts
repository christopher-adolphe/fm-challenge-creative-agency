import { Navigation, Parallax } from "swiper";
import 'swiper/css/pagination';

import {
  getDOMElement,
  generateCopyright,
  generateSlider,
  toggleHeaderVariant,
  toggleNavigation,
  scrollToContent,
  scrollToTop
} from "./assets/js/utilities";

document.addEventListener('DOMContentLoaded', () => {
  const copyrightElem = getDOMElement('copyright');
  
  generateCopyright(copyrightElem);

  const projectsSlider = generateSlider('projects', {
    init: false,
    slidesPerView: 1,
    speed: 1500,
    centeredSlides: true,
    noSwiping: false,
    parallax: true,
    modules: [ Navigation, Parallax ],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  if (projectsSlider) {
    projectsSlider.init();
  }


  toggleHeaderVariant('header');
  toggleNavigation('btn-nav-toggle');
  scrollToContent('header-nav');
  scrollToTop('btn-scroll-top');
});
