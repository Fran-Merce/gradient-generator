import {
  currentOption
} from "./options.js";


const displayCards = () => {
  for (let i = 0; i < 40; i++) {
    const card = document.createElement("div");
    const container = document.querySelector("#cardsContainer");
    card.classList.add("card");  
    card.innerHTML = createCard();
    container.appendChild(card)
    if (card) {
      card.childNodes[1].style.background = currentOption();
    }
  }
};

const createCard = () => {
  return `
        <div class="cardbg"></div>
        <div class="cardBtnContainer">
          <button class="btn-copy">Copy CSS!</button>
        </div>`;
};

const BgCardsChange = () => {
  const cardBg = document.querySelectorAll(".cardbg");
  cardBg.forEach(element => element.style.background = currentOption());
};

displayCards();


export{
  BgCardsChange,
  displayCards
}
