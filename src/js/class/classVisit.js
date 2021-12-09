import Input from './classInput.js';
import Label from './classLabel.js';
import Select from './classSelect.js';
import Button from './classButton.js';
import Modal from './classModal.js';
import Element from './classEL.js';
import FilterEl from './classFilter.js';

const token = `6437b668-8958-4db2-9491-e121b2a4c327`;

class Visit extends FilterEl {
  constructor() {
    super();
    this.doctor = this.labelDoctor();
    this.createBtn = this.createButton().create();
    this.closeBtn = this.closeBtn().create();
    this.target = this.targetInput().create();
    this.description = this.descriptionInput().create();
    this.urgency = this.selectUrgency();
    this.name = this.nameInput().create();
    this.element = this.createModal().create();
  }
  render() {
    document.body.prepend(this.element);
    this.closeBtn.addEventListener('click', this.handleCloseClick.bind(this));
    this.createBtn.addEventListener('click', this.handleCreateClick.bind(this));
  }

  createModal() {
    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.createBtn,
      this.closeBtn,
    ]);
  }
  //Добавил что бы подвязать событие
  labelDoctor() {
    this.labelDoctor = this.renderLabelEl(
      ['label', 'd-block'],
      'Select doctor'
    );
    this.labelDoctor.append(this.selectDoctor());
    return this.labelDoctor;
  }

  //Добавил что бы подвязать событие
  selectDoctor() {
    this.selectDoctor = this.renderLabelChildren('select-doctor');
    this.selectDoctor.append(this.renderOptionEl('Cardiologist'));
    this.selectDoctor.append(this.renderOptionEl('Dentist'));
    this.selectDoctor.append(this.renderOptionEl('Therapist'));
    return this.selectDoctor;
  }

  nameInput() {
    const nameInput = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Name`, nameInput.create());
  }

  // тут тоже
  selectUrgency() {
    this.labelUrgency = this.renderLabelEl(
      ['label', 'd-block'],
      'Select urgency'
    );
    this.selectUrgency = this.renderLabelChildren('');
    this.selectUrgency.append(this.renderOptionEl('High'));
    this.selectUrgency.append(this.renderOptionEl('Normal'));
    this.selectUrgency.append(this.renderOptionEl('Low'));
    this.labelUrgency.append(this.selectUrgency);
    return this.labelUrgency;
  }

  targetInput() {
    const targetInput = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Target`, targetInput.create());
  }

  descriptionInput() {
    const descriptionInput = new Element();
    return new Label(
      ['label', 'd-block'],
      `Descrition`,
      descriptionInput.createElement(
        'textarea',
        ['textarea'],
        {
          cols: '30',
          rows: '10',
        },
        ''
      )
    );
  }
  createButton() {
    return new Button(['button'], 'create-button', 'Create');
  }
  closeBtn() {
    return new Button(['close-button'], 'close-button', 'x');
  }
  handleCloseClick() {
    this.element.remove();
  }
  async handleCreateClick() {
    let response = await fetch('https://ajax.test-danit.com/api/v2/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${this.name.value}`,
        description: `${this.description.value}`,
        doctor: `${this.doctor.value}`,
        urgency: `${this.urgency.value}`,
        target: `${this.target.value}`,
      }),
    });
    response = response.json();
    console.log(response);
    this.element.remove();
    // const card = new Card();
    // card.render();
  }
}

export default Visit;
