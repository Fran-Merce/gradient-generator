import {
  getLinearGradient,
  getRadialGradient,
  getConicGradient,
} from "/src/gradients-generator.js";

document.querySelector("body").style.background = getLinearGradient();
const btnChangeColor = document.querySelector("#btn-changeColor");

btnChangeColor.addEventListener("click",() => (document.querySelector("body").style.background = getLinearGradient()));

// btnChangeColor.addEventListener("click", () => {
//   document.querySelectorAll("#canvas").forEach((index)=>{
//     index.style.background = getRadialGradient()
//   })
// });
