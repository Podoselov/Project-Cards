import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
import Visit from "./classVisit.js";

class VisitDentist extends Visit {
  constructor() {
    super();
  }
  render() {
    const modal = new Modal([
      this.selectDoctor().create(),
      this.nameInput().create(),
      this.selectUrgency().create(),
      this.targetInput().create(),
      this.descriptionInput().create(),
      this.lastVisitInput().create(),
      this.createButton().create(),
      this.closeBtn().create(),
    ]);
    modal.create();
  }
  lastVisitInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Last visit date`, input.create());
  }
}

export default VisitDentist;
