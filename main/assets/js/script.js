import toggleMenu from "./modules/burger-menu";
import {onlyVerticalMobile} from "./modules/only-vertical-mobile";
import toggleCard from "./modules/card";
import slider from "./modules/swiper";

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  toggleCard();
  slider();
  onlyVerticalMobile();
});
