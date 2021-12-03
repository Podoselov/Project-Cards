import Element from "./classEL.js";

class Button extends Element {
  constructor(classes, id, text) {
    super();
    this.classes = classes;
    this.id = id;
    this.text = text;
  }
  //   render(container) {
  //     this.createButton();
  //     this.insertIntoPage(container);
  //     this.addClickHandler();
  //   }
  create() {
    this.createElement(
      "button",
      this.classes,
      {
        id: this.id,
      },
      this.text
      );
      return this.element;
  }
}

export default Button;