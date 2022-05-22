import { Navigation, Parallax } from "swiper";
import 'swiper/css/pagination';

import {
  getDOMElement,
  generateCopyright,
  generateSlider,
  toggleHeaderVariant,
  toggleNavigation
} from "./assets/js/utilities";

document.addEventListener('DOMContentLoaded', () => {
  const copyrightElem = getDOMElement('copyright');
  
  generateCopyright(copyrightElem);

  const projectsSlider = generateSlider('projects-slider', {
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

  projectsSlider?.init();

  toggleHeaderVariant('header');

  toggleNavigation('btn-nav-toggle');
});
