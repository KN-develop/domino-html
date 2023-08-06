import toggleMenu from "./modules/burger-menu";
import {onlyVerticalMobile} from "./modules/only-vertical-mobile";

window.addEventListener("DOMContentLoaded", () => {
  toggleMenu();
  onlyVerticalMobile();
});
