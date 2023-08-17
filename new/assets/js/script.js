import toggleMenu from "./modules/burger-menu";
import toggleCard from "./modules/card";
import slider from "./modules/swiper";
import {onlyVerticalMobile} from "./modules/only-vertical-mobile";

window.addEventListener("load", () => {
  toggleMenu();
  toggleCard();
  slider();
  onlyVerticalMobile();
});
