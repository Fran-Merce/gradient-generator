
import{handlerOptionGradientStyle} from "/src/switchesStyles.js"
import { BgCardsChange } from "./cards.js";
import {
  getLinearGradient,
  getRadialGradient,
  getConicGradient,
} from "/src/gradients-generator.js";

export let currentOption = getLinearGradient;

export const hadlerOptions = e => {
  if (e.target.id === "radial") {
    currentOption = getRadialGradient;
  } else if (e.target.id === "conic") {
    currentOption = getConicGradient;
  } else if(e.target.id === "linear"){
    currentOption = getLinearGradient;
  }
};
const optionsGradient = document.querySelectorAll(".optionsLi");
optionsGradient.forEach(option => {
option.addEventListener("click", e => {
    handlerOptionGradientStyle(e);
    hadlerOptions(e);
    BgCardsChange();
  });
});
