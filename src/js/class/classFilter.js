import Element from './classEL.js';
import Label from './classLabel.js';
import Input from './classInput.js';
import Select from './classSelect.js';
class FilterEl extends Element {
  constructor() {
    super();
  }

  renderLabelEl(classLabel, textLabel) {
    this.labelFilterEl = new Label([classLabel], textLabel);
    return this.labelFilterEl.createLabel();
  }

  renderLabelChildren() {
    this.selectFilterEL = new Select('selectFilter');
    return this.selectFilterEL.create();
  }

  renderOptionEl(text) {
    return (this.optionEl = this.createElement(
      'option',
      ['option'],
      { value: '' },
      text
    ));
  }

  render() {
    this.containerEl = this.createElement('div', ['page__filter']);

    this.label1 = this.renderLabelEl(['label'], 'Text');
    this.inputFilterEl1 = new Input(['input'], 'filterInput');
    this.label1.append(this.inputFilterEl1.create());

    this.label2 = this.renderLabelEl(['label'], 'Status');
    this.select1 = this.renderLabelChildren();
    this.select1.append(this.renderOptionEl('Open'));
    this.select1.append(this.renderOptionEl('Done'));
    this.label2.append(this.select1);

    this.label3 = this.renderLabelEl(['label'], 'Urgency');
    this.select2 = this.renderLabelChildren();
    this.select2.append(this.renderOptionEl('High'));
    this.select2.append(this.renderOptionEl('Normal'));
    this.select2.append(this.renderOptionEl('Low'));
    this.label3.append(this.select2);

    this.containerEl.append(this.label1, this.label2, this.label3);
    return this.containerEl;
  }
}

export default FilterEl;
