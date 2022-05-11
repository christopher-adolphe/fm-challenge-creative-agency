import Swiper from "swiper";
import 'swiper/css';

export const getDOMElement = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

export const generateCopyright = (elem: HTMLElement | null) => {
  const year = new Date().getFullYear();
  const copyrightContent = `© ${year}`;

  if (!elem) {
    return;
  }

  const copyrightElem: HTMLElement | null = elem.querySelector('.footer__copyright-text');

  if (copyrightElem) {
    copyrightElem.innerHTML = copyrightContent;
  }
};

export const generateSlider = (id: string, options: { [key: string]: any } | undefined): Swiper | undefined => {
  const sliderElem = getDOMElement(id);

  if (!sliderElem) {
    return;
  }

  const swiperSlider = new Swiper(`#${id}`, { ...options });

  return swiperSlider;
};

export const toggleHeaderVariant = (id: string) => {
  const headerElem = getDOMElement(id);

  if (!headerElem) {
    return;
  }

  const handleViewportChange = (mediaQueryList: MediaQueryList) => {
    if (mediaQueryList.matches) {
      headerElem.dataset.variant = 'mobile';
    } else {
      headerElem.removeAttribute('data-variant');
      document.body.classList.remove('no-scrolling');
    }
  };
  const mobileDevice: MediaQueryList = window.matchMedia('(max-width: 767px)');

  handleViewportChange(mobileDevice);

  mobileDevice.addEventListener('change', (event: MediaQueryListEvent) => {
    const mediaQueryList = event.target as MediaQueryList;

    handleViewportChange(mediaQueryList);
  });
};

export const toggleNavigation = (id: string) => {
  const btnNavToggleElem = getDOMElement(id);

  if (!btnNavToggleElem) {
    return;
  }

  const handleBtnNavToggleElem = (event: Event) => {
    const btn = event.target as HTMLButtonElement;
    const isExpanded = btn.getAttribute('aria-expanded');

    console.log(btn.getAttribute('aria-expanded'));

    if (isExpanded === 'false') {
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }

    document.body.classList.toggle('no-scrolling');
  };

  btnNavToggleElem.addEventListener('click', handleBtnNavToggleElem);
};

const Utilities = {
  getDOMElement,
  generateCopyright,
  generateSlider,
  toggleHeaderVariant,
  toggleNavigation
};

export default Utilities;
