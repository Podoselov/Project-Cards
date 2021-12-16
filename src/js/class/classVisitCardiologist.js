import Visit from './classVisit.js';
import Input from './classInput.js';
import Label from './classLabel.js';
import Modal from './classModal.js';
import Card from './classCard.js';
import selectDoctorListener from '../listener/visitListener.js';
import postVisitFetch from '../fetch/postVisitFetch.js';
import putVisitCard from '../fetch/putVisitCard.js';
import token from '../fetch/token.js';
class VisitCardiologist extends Visit {
  constructor() {
    super();
    this.pressure = this.pressureInput().create();
    this.BMI = this.BMI().create();
    this.deseases = this.deseasesInput().create();
    this.age = this.ageInput().create();
    this.element = this.createModal().create();
  }
  createModal() {
    const modal = new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.pressure,
      this.BMI,
      this.deseases,
      this.age,
      this.warning,
      this.createBtn,
      this.closeBtn,
    ]);
    this.doctor
      .querySelector('select')
      .querySelector(`option[value='Cardiologist'`)
      .setAttribute('selected', '');
    this.doctor.addEventListener('change', (e) => {
      selectDoctorListener(e);
    });
    return modal;
  }

  pressureInput() {
    const input = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Pressure`, input.create());
  }
  BMI() {
    const input = new Input(['input'], '');
    return new Label(['label', 'd-block'], `BMI`, input.create());
  }
  deseasesInput() {
    const input = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Deseases`, input.create());
  }
  ageInput() {
    const input = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Age`, input.create());
  }
  handleCreateClick() {
    if (this.createBtn.classList.contains('update')) {
      this.upgradeCard();
    } else {
      this.createCard();
    }
  }

  setPostObj() {
    return {
      name: `${this.name.querySelector('input').value}`,
      description: `${this.description.querySelector('textarea').value}`,
      doctor: `${this.doctor.querySelector('select').value}`,
      urgency: `${this.urgency.querySelector('select').value}`,
      pressure: `${this.pressure.querySelector('input').value}`,
      age: `${this.age.querySelector('input').value}`,
      BMI: `${this.BMI.querySelector('input').value}`,
      deseases: `${this.deseases.querySelector('input').value}`,
      target: `${this.target.querySelector('input').value}`,
    };
  }

  async createCard() {
    if (
      this.name.querySelector('input').value !== '' &&
      this.pressure.querySelector('input').value !== '' &&
      this.BMI.querySelector('input').value !== '' &&
      this.deseases.querySelector('input').value !== '' &&
      this.age.querySelector('input').value !== '' &&
      this.target.querySelector('input').value !== ''
    ) {
      if (document.querySelector('.no-items')) {
        document.querySelector('.no-items').remove();
      }
       this.warning.classList.add("d-none");
      const response = await postVisitFetch(this.setPostObj(), token);
      const card = new Card(await response);
      card.render();
      this.element.remove();
    } else {
      this.warning.classList.remove('d-none')
    }
  }

  async upgradeCard() {
    const response = await putVisitCard(
      this.element.id,
      this.setPostObj(),
      token
    );
    document.getElementById(`card-${this.element.id}`).remove();
    const card = new Card(await response);
    card.render();
    this.element.remove();
  }
}

export default VisitCardiologist;
