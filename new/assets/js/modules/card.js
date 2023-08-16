const SELECTORS = {
  card: "[data-card]",
  cardBtn: "[data-card-btn]",
};

const CLASSES = {
  cardOpen: "card--open",
};

export default function toggleCard() {
  document.querySelectorAll(SELECTORS.cardBtn).forEach((btn) => {
    const card = btn.closest(SELECTORS.card);

    btn.addEventListener("click", () => {
      card.classList.toggle(CLASSES.cardOpen);
    });
  });
}
