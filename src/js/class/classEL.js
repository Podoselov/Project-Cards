class Element {
  constructor() {
    this.element = null;
  }
  createElement(elemTag, classNames = [], newAtr = {}, text = null) {
    this.element = document.createElement(elemTag);
    this.element.classList.add(...classNames);
    if (text) {
      this.element.innerHTML = text;
    }
    if (newAtr) {
      for (const key in newAtr) {
        this.element.setAttribute(key, newAtr[key]);
      }
    }
    return this.element;
  }

  insertIntoPage(container) {
    container.append(this.element);
  }
}
export default Element;
