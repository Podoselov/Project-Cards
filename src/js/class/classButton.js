import Element from './classEL.js';

class Button extends Element {
  constructor(classes, id, text) {
    super();
    this.classes = classes;
    this.id = id;
    this.text = text;
  }
  create() {
    this.element = this.createElement(
      "button",
      this.classes,
      {
        id: this.id,
        type: "submit",
      },
      this.text
    );
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
    });
    return this.element;
  }
}

export default Button;
