import Element from './classEL.js';

class Input extends Element {
  constructor(classes, id) {
    super();
    this.classes = classes;
    this.id = id;
  }
  create() {
    this.element = this.createElement('input', this.classes, {
      id: this.id,
      type: 'text',
    });
    return this.element;
  }
}

export default Input;
