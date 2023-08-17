import toggleMenu from "./modules/burger-menu";
import {onlyVerticalMobile} from "./modules/only-vertical-mobile";
import toggleCard from "./modules/card";

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  toggleCard();
  onlyVerticalMobile();
});
