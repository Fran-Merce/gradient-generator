import { cardContainer, nav } from "./index.js";
import { displayCards } from "./cards.js";
const onIntersectLastCard = ([entry]) => {
  if (entry.isIntersecting) {
    displayCards();

  }
};
const onIntersectNav = ([entry]) => {
  if (!entry.isIntersecting) {
nav.classList.add("nav-active");
  } 
};
const intersectionOptionsCard = {
  threshold: 0.1,
};
const intersectionOptionsNav = {
  threshold: 0,
};

export let observatorLastCard = new IntersectionObserver(
  onIntersectLastCard,
  intersectionOptionsCard
);
export let observatorNav = new IntersectionObserver(
  onIntersectNav,
  intersectionOptionsNav
);
