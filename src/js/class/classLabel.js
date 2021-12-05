import Element from './classEL.js';

class Label extends Element {
  constructor(classes, text, child = null) {
    super();
    this.classes = classes;
    this.text = text;
    this.child = child;
  }

  createLabel() {
    this.element = this.createElement('label', this.classes, {}, this.text);
    return this.element;
  }
}

export default Label;
