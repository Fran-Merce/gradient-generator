import { BgCardsChange } from "./cards.js";
import { handlerCopy } from "/src/copy.js";
import { hadlerOptions, currentOption } from "/src/options.js";
import { observatorLastCard, observatorNav } from "/src/scroll.js";
import {handlerOptionGradientStyle} from "./switchesStyles.js";
export const cardsBg = document.querySelectorAll(".cardbg");
export const cardContainer = document.querySelector("#cardsContainer");
export const optionsContainer = document.querySelector("#options");
export const nav = document.querySelector(".nav");

let lastCard = cardContainer.lastElementChild;
const optionsGradient = document.querySelectorAll(".optionsLi");

document.addEventListener("DOMContentLoaded", () => cardsBg.forEach(card => card.style.background = currentOption()));

cardContainer.addEventListener("click", e =>  handlerCopy(e));

optionsGradient.forEach(option => {
  option.addEventListener("click", e => {
    handlerOptionGradientStyle(e);
    hadlerOptions(e);
    BgCardsChange();
  });
})

observatorNav.observe(nav);
observatorLastCard.observe(lastCard);
