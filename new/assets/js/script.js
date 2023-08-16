import toggleMenu from "./modules/burger-menu";
import toggleCard from "./modules/card";
import slider from "./modules/swiper";

window.addEventListener("load", () => {
  toggleMenu();
  toggleCard();
  slider();
});
