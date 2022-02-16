import {
  currentOption
} from "./options.js";


export const displayCards = () => {
  for (let i = 0; i < 40; i++) {
    const card = document.createElement("div");
    const container = document.querySelector("#cardsContainer");
    card.classList.add("card");
    container.insertBefore(card, cardInit);
    card.innerHTML = createCard();
    if (card) {
      card.childNodes[1].style.background = currentOption();
    }
  }
};

const createCard = () => {
  return `
        <div class="cardbg"></div>
        <div class="cardBtnContainer"">
     
          <button class="btn-copy">Copy CSS!</button>
        </div>`;
};

displayCards();
export const BgCardsChange = () => {
  const cardBg = document.querySelectorAll(".cardbg");
  cardBg.forEach(element => element.style.background = currentOption());
};
