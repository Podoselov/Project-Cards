import Element from './classEL.js';

class LabelEl extends Element {
  constructor() {
    super();
  }
  renderLabel(classNamesLabel = [], textLabel, newAtrLabel = {}) {
    this.labelEl = this.createElement('label', classNamesLabel);
    if (textLabel) {
      this.labelEl.textContent = textLabel;
    }
    if (newAtrLabel) {
      for (const key in newAtrLabel) {
        this.labelEl.setAttribute(key, newAtrLabel[key]);
      }
    }
    return this.labelEl;
  }
}

export default LabelEl;
