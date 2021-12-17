import Element from './classEL.js';
import Label from './classLabel.js';
import Input from './classInput.js';
import Select from './classSelect.js';

class FilterEl extends Element {
  constructor() {
    super();
  }

  renderLabelEl(classLabel, textLabel) {
    this.labelFilterEl = new Label(classLabel, textLabel, '');
    return this.labelFilterEl.create();
  }

  renderLabelChildren(idElSelect) {
    this.selectFilterEL = new Select(idElSelect);
    return this.selectFilterEL.create();
  }

  renderOptionEl(text) {
    return (this.optionEl = this.createElement(
      'option',
      ['option'],
      { value: text },
      text
    ));
  }

  render() {
    this.containerEl = this.createElement('div', ['page__filter']);
    this.label1 = this.renderLabelEl(['label'], 'Text');
    this.inputFilterEl1 = new Input(['input'], 'filterInput');
    this.inputEl = this.inputFilterEl1.create();
    this.inputEl.addEventListener('input', () => {
      this.cardEl = document.querySelectorAll('.cards-item');
      Array.from(this.cardEl).forEach((el) => {
        const nameEl = el.querySelector('.cards-item-text-name');
        const name = nameEl.textContent.slice(6);
        if (!name.toLowerCase().includes(this.inputEl.value.toLowerCase())) {
          el.classList.add('d-none');
        } else {
          el.classList.remove('d-none');
        }
      });
    });
    this.label1.append(this.inputEl);

    this.label2 = this.renderLabelEl(['label'], 'Status');
    this.select1 = this.renderLabelChildren('selectFilter');
    this.select1.append(this.renderOptionEl('Open'));
    this.select1.append(this.renderOptionEl('Done'));
    this.select1.addEventListener('change', (e) => {
      this.cardEl = document.querySelectorAll('.cards-item');
      this.selectValue = e.target.value.toLowerCase();
      Array.from(this.cardEl).forEach((el) => {
        if (el.classList.contains(this.selectValue)) {
          el.classList.remove('d-none');
        } else {
          el.classList.add('d-none');
        }
      });
    });
    this.label2.append(this.select1);

    this.label3 = this.renderLabelEl(['label'], 'Urgency');
    this.select2 = this.renderLabelChildren('selectFilter');
    this.select2.append(this.renderOptionEl('High'));
    this.select2.append(this.renderOptionEl('Normal'));
    this.select2.append(this.renderOptionEl('Low'));
    this.select2.addEventListener('change', (e) => {
      this.cardEl = document.querySelectorAll('.cards-item');
      Array.from(this.cardEl).forEach((el) => {
        if (!el.classList.contains(e.target.value.toLowerCase())) {
          el.classList.add('d-none');
        } else {
          el.classList.remove('d-none');
        }
      });
    });
    this.label3.append(this.select2);

    this.containerEl.append(this.label1, this.label2, this.label3);
    return this.containerEl;
  }
}

export default FilterEl;
