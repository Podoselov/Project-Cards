import Input from "./classInput.js";
import Label from "./classLabel.js";
import Select from "./classSelect.js";
import Button from "./classButton.js";
import Modal from "./classModal.js";
import Element from "./classEL.js";

class Visit {
  constructor(target, description, urgency, name) {
    this.target = target;
    this.description = description;
    this.urgency = urgency;
    this.name = name;
  }
  render() {
    const modal = new Modal([
      this.selectDoctor().create(),
      this.nameInput().create(),
      this.selectUrgency().create(),
      this.targetInput().create(),
      this.descriptionInput().create(),
      this.createButton().create(),
      this.closeBtn().create(),
    ]);
    modal.create();
  }
  selectDoctor() {
    const selectDoctor = new Select(
      "",
      '<option value="">Dentist</option><option value="">Cardiologist</option><option value="">Therapist</option>'
    );
    return new Label(
      ["label", "d-block"],
      `Select doctor`,
      selectDoctor.create()
    );
  }
  nameInput() {
    const nameInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Name`, nameInput.create());
  }
  selectUrgency() {
    const selectUrgency = new Select(
      "",
      '<select class="select" name="" id=""><option value="">High</option><option value="">Normal</option><option value="">Low</option>'
    );
    return new Label(
      ["label", "d-block"],
      `Select urgency`,
      selectUrgency.create()
    );
  }
  targetInput() {
    const targetInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Target`, targetInput.create());
  }
  descriptionInput() {
    const descriptionInput = new Element();
    return new Label(
      ["label", "d-block"],
      `Descrition`,
      descriptionInput.createElement(
        "textarea",
        ["textarea"],
        {
          cols: "30",
          rows: "10",
        },
        ""
      )
    );
  }
  createButton() {
    return new Button(["button"], "create-button", "Create");
  }
  closeBtn() {
    return new Button(["close-button"], "close-button", "x");
  }
}

export default Visit;
