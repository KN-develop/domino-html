import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const SELECTORS = {
  slider: "[data-carousel]",
  sliderContainer: "[data-carousel-container]",
  sliderPrevBtn: "[data-carousel-prev]",
  sliderNextBtn: "[data-carousel-next]",
};

export default function slider() {
  document.querySelectorAll(SELECTORS.slider).forEach((el) => {
    let container = el.querySelector(SELECTORS.sliderContainer),
      prev = el.querySelector(SELECTORS.sliderPrevBtn),
      next = el.querySelector(SELECTORS.sliderNextBtn),
      params = {
        modules: [Navigation, Pagination],
        navigation: {
          prevEl: prev,
          nextEl: next,
        },
        slidesPerView: "1",
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      };

    let instance = new Swiper(container, params);
  });
}
