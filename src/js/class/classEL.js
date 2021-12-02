class Element {
  constructor() {}
  createElement(elemTag, classNames = [], newAtr = {}, text) {
    const el = document.createElement(elemTag);
    el.classList.add(...classNames);
    if (text) {
      el.textContent = text;
    }
    if (newAtr) {
      for (const key in newAtr) {
        el.setAttribute(key, newAtr[key]);
      }
    }
    return el;
  }
}
export default Element;
