
import { displayCards } from "./cards.js";

const onIntersectLastCard = ([entry]) => {
  if (entry.isIntersecting) {
    displayCards();
  }
};
const onIntersectNav = ([entry]) => {
  const arrow = document.querySelector("#arrowHome");
  if (!entry.isIntersecting) {
    arrow.classList.remove("hidden");
  } else{
    arrow.classList.add("hidden");
  }
};

const intersectionOptionsCard = {
  threshold: 0.1,
};
const intersectionOptionsNav = {
  threshold: 0,
};

let observatorLastCard = new IntersectionObserver(
  onIntersectLastCard,
  intersectionOptionsCard
);
let observatorNav = new IntersectionObserver(
  onIntersectNav,
  intersectionOptionsNav
);
export{
  observatorLastCard,
  observatorNav
}