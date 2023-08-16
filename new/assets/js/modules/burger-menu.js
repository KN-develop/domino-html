const SELECTORS = {
  menu: "[data-menu]",
  menuBtn: "[data-menu-btn]",
};

const CLASSES = {
  burgerOpen: "menu--open",
};

export default function toggleMenu() {
  document.querySelectorAll(SELECTORS.menuBtn).forEach((btn) => {
    btn.addEventListener("click", () => {
      const menu = btn.closest(SELECTORS.menu);
      menu.classList.toggle(CLASSES.burgerOpen);
    });
  });
}
