export const handlerOptionGradientStyle = e => {
  const optionsGradient = document.querySelectorAll(".optionsLi");
  optionsGradient.forEach(option => {
    if (option.classList.contains("ul-nav-active")) {
      option.classList.remove("ul-nav-active");
    }
  });
  e.target.classList.add("ul-nav-active");
};

export const handlerNavMobile = () =>{
  const nav=document.querySelector('nav')
  const ulNav= document.querySelector('.ul-nav')
  nav.classList.toggle('nav-mobile-active')
  ulNav.classList.toggle('active')
}