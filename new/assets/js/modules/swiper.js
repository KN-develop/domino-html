import Swiper from "swiper";

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
    console.log(prev, next);

    let instance = new Swiper(container, params);
  });
}
