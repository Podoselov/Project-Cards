import Input from './classInput.js';
import Label from './classLabel.js';
import Modal from './classModal.js';
import Visit from './classVisit.js';

class VisitDentist extends Visit {
  constructor() {
    super();
    this.lastVisit = this.lastVisitInput().create();
    this.element = this.createModal().create();
  }
  createModal() {
    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.lastVisit,
      this.createBtn,
      this.closeBtn,
    ]);
  }
  lastVisitInput() {
    const input = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Last visit date`, input.create());
  }
}

export default VisitDentist;
