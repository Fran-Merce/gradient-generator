import {
  getLinearGradient,
  getRadialGradient,
  getConicGradient,
} from "/src/gradients-generator.js";
import {hadlerOptions,currentOption} from "/src/options.js"
document.querySelector("body").style.background = getLinearGradient();
const btnChangeColor = document.querySelector("#btn-changeColor");
const body = document.querySelector("body");

console.log(document.querySelector("body").style.background);

const bgstyle = () => {
  const bg = document.querySelector("body").style.background;
  const bgFormatedCss = `background: ${bg.slice(0, -1)} 100%)`;
  document.querySelector("#copy").innerHTML = bgFormatedCss;
};

btnChangeColor.addEventListener("click", () => {
  document.querySelector("body").style.background = currentOption();
  bgstyle();
});

document.querySelector("#options").addEventListener("click", (e) => {
  hadlerOptions(e);
});
bgstyle()