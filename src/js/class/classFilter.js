import Element from './classEL.js';
import LabelEl from './classLabel.js';

class FilterEl extends Element {
  constructor() {
    super();
  }
  renderFilterEl() {
    this.containerEl = this.createElement('div', ['page__filter']);
    this.labelFilterEl = new LabelEl();
    // this.labelFilterEl.renderLabel(['label'], 'text');
    console.log(this.labelFilterEl.renderLabel(['label'], 'text'));
  }
}

export default FilterEl;
