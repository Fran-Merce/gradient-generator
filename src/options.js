
import {
    getLinearGradient,
    getRadialGradient,
    getConicGradient,
  } from "/src/gradients-generator.js";
export let currentOption = getLinearGradient;

export const hadlerOptions = (e) => {
       
      
  if (e.target.id === "radial") {
    currentOption = getRadialGradient;
  console.log('click');
  } else if (e.target.id=== "conic") {
    currentOption = getConicGradient;
  } else {
    currentOption = getLinearGradient;
 
}
};
