import Element from './classEL.js';

class Input extends Element {
  constructor(classes, id, name) {
    super();
    this.classes = classes;
    this.id = id;
    this.name = name;
  }
  create() {
    this.createElement(
      'input',
      this.classes,
      {
        id: this.id,
        type: 'text',
        name: this.name,
        required: '',
      },
      ''
    );
    return this.element;
  }
}

export default Input;
