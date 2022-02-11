import { BgCardsChange } from "./cards.js";
import { handlerCopy } from "/src/copy.js";
import { currentOption } from "/src/options.js";

import { handlerNavMobile } from "./switchesStyles.js";
import { observatorNav,observatorLastCard} from "./scroll.js";
 const cardsBg = document.querySelectorAll(".cardbg");
const cardContainer = document.querySelector("#cardsContainer");
 const optionsContainer = document.querySelector("#options");
const menuMobileBtn = document.querySelector("#menuMobileBtn");
const nav = document.querySelector(".nav");
let lastCard = cardContainer.lastElementChild;

document.addEventListener("DOMContentLoaded", () =>
  cardsBg.forEach(card => card.style.background = currentOption())
);

cardContainer.addEventListener("click", e => handlerCopy(e));

menuMobileBtn.addEventListener("click", handlerNavMobile);

export{
  cardsBg,
  cardContainer,
  optionsContainer
}

observatorLastCard.observe(lastCard);
observatorNav.observe(nav);