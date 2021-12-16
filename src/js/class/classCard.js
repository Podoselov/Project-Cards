import Button from './classButton.js';
import Element from './classEL.js';
import VisitDentist from './classVisitDentist.js';
import VisitCardiologist from './classVisitCardiologist.js';
import VisitTherapist from './classVisitTherapist.js';

const token = `6437b668-8958-4db2-9491-e121b2a4c327`;
class Card extends Element {
  constructor({
    id,
    doctor,
    target,
    description,
    urgency,
    name,
    pressure,
    BMI,
    deseases,
    age,
    lastVisit,
  }) {
    super();
    this.id = id;
    this.doctor = doctor;
    this.target = target;
    this.description = description;
    this.urgency = urgency;
    this.name = name;
    this.pressure = pressure;
    this.BMI = BMI;
    this.deseases = deseases;
    this.age = age;
    this.lastVisit = lastVisit;
    this.showMoreBtn = this.showMoreBtn().create();
    this.editBtn = this.editBtn().create();
    this.deleteBtn = this.deleteBtn().create();
    this.element = null;
  }

  render() {
    this.create();
    this.showMoreBtn.addEventListener(
      'click',
      this.showMoreListener.bind(this)
    );
    this.editBtn.addEventListener('click', this.editListener.bind(this));
    this.deleteBtn.addEventListener('click', this.deleteListener.bind(this));
  }
  create() {
    this.containerEl = document.querySelector('.cards-container');
    this.element = this.createElement(
      'div',
      ['cards-item', this.urgency.toLowerCase()],
      {
        id: `card-${this.id}`,
      }
    );
    this.element.innerHTML = `<p class="cards-item-text cards-item-text-name">Name: ${this.name}</p><p class="cards-item-text">Doctor: ${this.doctor}</p>`;
    this.element.append(this.showMoreBtn, this.editBtn, this.deleteBtn);
    return this.containerEl.append(this.element);
  }

  deleteBtn() {
    return new Button(['close-button'], 'close-button', 'x');
  }
  showMoreBtn() {
    return new Button(
      ['button', 'cards-button'],
      'show-more-button',
      'Show more'
    );
  }
  editBtn() {
    return new Button(['button', 'cards-button'], 'edit-button', 'Edit');
  }
  showMoreListener() {
    this.showMoreBtn.remove();
    const urgency = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Urgency: ${this.urgency}`
    );
    const deseases = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Deseases: ${this.deseases}`
    );
    const target = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Target: ${this.target}`
    );
    const description = new Element().createElement(
      'p',
      ['cards-item-text', 'card-item-description'],
      {},
      `Description: ${this.description}`
    );
    const pressure = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Pressure: ${this.pressure}`
    );
    const BMI = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `BMI: ${this.BMI}`
    );
    const age = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Age: ${this.age}`
    );
    const lastVisit = new Element().createElement(
      'p',
      ['cards-item-text'],
      {},
      `Last visit: ${this.lastVisit}`
    );
    this.editBtn.before(urgency, target, description);
    if (this.doctor == 'Cardiologist') {
      this.editBtn.before(pressure, BMI, deseases, age);
    }
    if (this.doctor == 'Dentist') {
      this.editBtn.before(lastVisit);
    }
    if (this.doctor == 'Therapist') {
      this.editBtn.before(age);
    }
  }
  editListener() {
    if (this.doctor == 'Cardiologist') {
      const visit = new VisitCardiologist();
      visit.render();
      visit.element.setAttribute('id', this.id);
      visit.name.querySelector('input').value = this.name;
      visit.target.querySelector('input').value = this.target;
      visit.description.querySelector('textarea').value = this.description;
      visit.age.querySelector('input').value = this.age;
      visit.BMI.querySelector('input').value = this.BMI;
      visit.deseases.querySelector('input').value = this.deseases;
      visit.pressure.querySelector('input').value = this.pressure;
      visit.urgency
        .querySelector('select')
        .querySelector(`option[value=${this.urgency}`)
        .setAttribute('selected', '');
      visit.createBtn.classList.add('update');
      visit.createBtn.innerHTML = 'Update';
    }
    if (this.doctor == 'Dentist') {
      const visit = new VisitDentist();
      visit.render();
      visit.element.setAttribute('id', this.id);
      visit.name.querySelector('input').value = this.name;
      visit.target.querySelector('input').value = this.target;
      visit.description.querySelector('textarea').value = this.description;
      visit.lastVisit.querySelector('input').value = this.lastVisit;
      visit.urgency
        .querySelector('select')
        .querySelector(`option[value=${this.urgency}`)
        .setAttribute('selected', '');
      visit.createBtn.classList.add('update');
      visit.createBtn.innerHTML = 'Update';
    }

    if (this.doctor == 'Therapist') {
      const visit = new VisitTherapist();
      visit.render();
      visit.element.setAttribute('id', this.id);
      visit.name.querySelector('input').value = this.name;
      visit.target.querySelector('input').value = this.target;
      visit.description.querySelector('textarea').value = this.description;
      visit.age.querySelector('input').value = this.age;
      visit.urgency
        .querySelector('select')
        .querySelector(`option[value=${this.urgency}`)
        .setAttribute('selected', '');
      visit.createBtn.classList.add('update');
      visit.createBtn.innerHTML = 'Update';
    }
  }
  deleteListener() {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      this.element.remove();
      if (!document.querySelector('.cards-item')) {
        document.querySelector('.cards-container').innerHTML =
          '<p class="no-items">No items have beed added</p>';
      }
    });
  }
}

export default Card;
