import Element from "./classEL.js";

class Modal extends Element {
  constructor(children) {
    super();
    this.children = children;
  }

  createModal() {
      const container = document.createElement("div");
      document.body.append(container);
    container.classList.add("modal", "d-none");
    container.id = "log-in-modal";
    this.createElement("div", ["modal-content"]);
    this.children.forEach((child) => {
      this.element.append(child);
    });
    return container.append(this.element);
  }
}

export default Modal;
