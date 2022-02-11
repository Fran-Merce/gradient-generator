
const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const randomGeneratorNum = MaxNum => Math.floor(Math.random() * MaxNum);

const getColor = () => {
  let hexColor = ["#"];
  for (let i = 0; i < 6; i++) {
    const randomNumber = randomGeneratorNum(hexValues.length);
    hexColor = [...hexColor, hexValues[randomNumber]];
  }
  return hexColor.join("", ",").toString();
};

const getLinearGradient = () => `linear-gradient(${randomGeneratorNum(360)}deg,${getColor()},${getColor()}`;
const getRadialGradient=()=>`radial-gradient(${getColor()},${getColor()})`;
const getConicGradient = ()=>`conic-gradient(from ${randomGeneratorNum(360)}deg at 50% 50% , ${getColor()}, ${getColor()},${getColor()},${getColor()}, ${getColor()}`;

export{
  getConicGradient,
  getRadialGradient,
  getLinearGradient
  ,}