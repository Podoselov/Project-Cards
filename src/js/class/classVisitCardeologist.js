import Visit from "./classVisit.js";
import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
class VisitCardiologist extends Visit {
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
      this.pressureInput().create(),
      this.BMI().create(),
      this.deseasesInput().create(),
      this.ageInput().create(),
      this.createButton().create(),
      this.closeBtn().create(),
    ]);
    modal.create();
  }
  pressureInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Pressure`, input.create());
  }
  BMI() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `BMI`, input.create());
  }
  deseasesInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Deseases`, input.create());
  }
  ageInput() {
    const input = new Input(["input"], "");
    return new Label(["label", "d-block"], `Age`, input.create());
  }
}

export default VisitCardiologist;
