import copy from "/node_modules/copy-text-to-clipboard/index.js";
export const handlerCopy = (e) => {
  if (e.target.className === "btn-copy") {
    const card = e.target.parentNode.parentNode;
    const cardBg = card.childNodes[1].style.background;
    const bgFormatedCss = `background: ${cardBg.slice(0, -1)} 100%)`;
    copy(bgFormatedCss);
   copyButtonText(e)
  }
};

const copyButtonText = (e) => {
    e.target.innerText = "CSS Copied!";
    setTimeout(() => {
      e.target.innerText = "Copy CSS!";
    }, 4000);
}