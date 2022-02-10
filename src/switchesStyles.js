



export const handlerOptionGradientStyle = (e) => {
  const optionsGradient = document.querySelectorAll(".optionsLi");
  
  optionsGradient.forEach(option => {
    if (option.classList.contains("ul-nav-active")) {
      option.classList.remove("ul-nav-active");
    }
  });

  e.target.classList.add("ul-nav-active");
};

const heartSvg =  document.querySelectorAll(".heart");