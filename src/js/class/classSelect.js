import Element from './classEL.js';

class Select extends Element {
  constructor(id, text) {
    super();
    this.id = id;
    this.text = text;
  }

  create() {
    this.createElement("select", ["select"], { id: this.id }, this.text);
    return this.element;
  }
}

export default Select;
