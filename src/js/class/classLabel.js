import Element from "./classEL.js";

class Label extends Element {
  constructor(classes, text, child) {
    super();
    this.classes = classes;
    this.text = text;
    this.child = child;
  }
  
  createLabel() {
    this.createElement(
      "label",
      this.classes,
      {},
      this.text
    );
    this.element.append(this.child)
    return this.element;
  }
}

export default Label;
