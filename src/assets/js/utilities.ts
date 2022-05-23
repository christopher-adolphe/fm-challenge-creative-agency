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
  const sliderElem: HTMLElement | null = getDOMElement(id);

  if (!sliderElem) {
    return;
  }

  const swiperSlider = new Swiper(`#${id}`, { ...options });

  return swiperSlider;
};

export const toggleHeaderVariant = (id: string) => {
  const headerElem: HTMLElement | null = getDOMElement(id);

  if (!headerElem) {
    return;
  }

  const mobileDevice: MediaQueryList = window.matchMedia('(max-width: 767px)');
  const handleViewportChange = (mediaQueryList: MediaQueryList) => {
    if (mediaQueryList.matches) {
      headerElem.dataset.variant = 'mobile';
    } else {
      headerElem.removeAttribute('data-variant');
      document.body.classList.remove('no-scrolling');
    }
  };

  handleViewportChange(mobileDevice);

  mobileDevice.addEventListener('change', (event: MediaQueryListEvent) => {
    const mediaQueryList = event.target as MediaQueryList;

    handleViewportChange(mediaQueryList);
  });
};

export const toggleNavigation = (id: string) => {
  const btnNavToggleElem: HTMLElement | null = getDOMElement(id);

  if (!btnNavToggleElem) {
    return;
  }

  const handleBtnNavToggleElem = (event: Event) => {
    const btn = event.target as HTMLButtonElement;
    const isExpanded = btn.getAttribute('aria-expanded');

    if (isExpanded === 'false') {
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }

    document.body.classList.toggle('no-scrolling');
  };

  btnNavToggleElem.addEventListener('click', handleBtnNavToggleElem);
};

export const scrollToContent = (id: string) => {
  const navElem: HTMLElement | null = getDOMElement(id);

  if (!navElem) {
    return;
  }

  const navListElem: HTMLUListElement | null = navElem.querySelector('ul');
  const btnNavToggleElem: HTMLElement | null = getDOMElement('btn-nav-toggle');
  const mobileDevice: MediaQueryList = window.matchMedia('(max-width: 767px)');

  navListElem?.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLAnchorElement;
    const activeLink: Element | null = navListElem?.querySelector('a.active');
    const anchorName: string | null = target.getAttribute('data-anchor');
    const anchorElem: Element | null = document.querySelector(`#${anchorName}`);

    if (activeLink) {
      activeLink.classList.remove('active');
    }

    if (target.nodeName === 'A') {
      target.classList.add('active');
      event.preventDefault();
    }

    if (mobileDevice.matches) {
      btnNavToggleElem?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scrolling');
    }

    if (anchorElem) {
      anchorElem.scrollIntoView({behavior: 'smooth'});
    }
  });
};

export const scrollToTop = (id: string) => {
  const btnElem: HTMLElement | null = getDOMElement(id);

  if (!btnElem) {
    return;
  }
};

const Utilities = {
  getDOMElement,
  generateCopyright,
  generateSlider,
  toggleHeaderVariant,
  toggleNavigation,
  scrollToContent
};

export default Utilities;
