import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
import Visit from "./classVisit.js";

class VisitTherapist extends Visit {
  constructor(handleChangePopup) {
    super();
    this.age = this.ageInput().create();
    this.element = this.createModal().create();
    // this.handleChangePopup = handleChangePopup;
  }
  createModal() {

    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.age,
      this.createBtn,
      this.closeBtn,
    ]);
  }
  ageInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Age`, input.create());
  }
}

export default VisitTherapist;
