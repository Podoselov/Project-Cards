import Element from './classEL.js';
import Label from './classLabel.js';

class FilterEl extends Element {
  constructor() {
    super();
  }
  render() {
    this.containerEl = this.createElement('div', ['page__filter']);
    this.labelFilterEl = new Label(["label"], "text" ["child"]);
    // this.labelFilterEl.render(['label'], 'text');
    console.log(this.labelFilterEl.create());
  }
}

export default FilterEl;
