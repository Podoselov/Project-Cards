import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
import Visit from "./classVisit.js";

class VisitTherapist extends Visit {
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
      this.ageInput().create(),
      this.createButton().create(),
      this.closeBtn().create(),
    ]);
    modal.create();
  }
  ageInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Age`, input.create());
  }
}

export default VisitTherapist;
