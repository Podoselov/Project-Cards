import Element from './classEL.js';

class Modal extends Element {
  constructor(children) {
    super();
    this.children = children;
  }

  create() {
    const container = document.createElement('div');

    container.classList.add('modal');
    this.createElement('div', ['modal-content']);
    this.children.forEach((child) => {
      this.element.append(child);
    });
    container.append(this.element);
    return container;
  }
}

export default Modal;
