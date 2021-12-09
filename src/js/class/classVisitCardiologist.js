import Visit from './classVisit.js';
import Input from './classInput.js';
import Label from './classLabel.js';
import Modal from './classModal.js';

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
    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.pressure,
      this.BMI,
      this.deseases,
      this.age,
      this.createBtn,
      this.closeBtn,
    ]);
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
}

export default VisitCardiologist;
