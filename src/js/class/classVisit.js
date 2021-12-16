import Input from "./classInput.js";
import Label from "./classLabel.js";
import Select from "./classSelect.js";
import Button from "./classButton.js";
import Modal from "./classModal.js";
import Element from "./classEL.js";
import FilterEl from "./classFilter.js";

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
    this.warning = this.warningTitle();
    this.element = this.createModal().create();
  }

  render() {
    document.body.prepend(this.element);
    this.closeBtn.addEventListener("click", this.handleCloseClick.bind(this));
    if (this.handleCreateClick) {
      this.createBtn.addEventListener(
        "click",
        this.handleCreateClick.bind(this)
      );
    }
  }

  createModal() {
    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.warning,
      this.createBtn,
      this.closeBtn,
    ]);
  }

  labelDoctor() {
    this.labelDoctor = this.renderLabelEl(
      ["label", "d-block"],
      "Select doctor"
    );
    this.labelDoctor.append(this.selectDoctor());
    return this.labelDoctor;
  }

  warningTitle() {
    const warning = new Element
      return warning.createElement(
        "p",
        ["warning-title", 'd-none'],
        {},
        "All fields have to be filled"
      );
  }

  selectDoctor() {
    this.selectDoctor = this.renderLabelChildren("select-doctor");
    this.selectDoctor.append(this.renderOptionEl("Cardiologist"));
    this.selectDoctor.append(this.renderOptionEl("Dentist"));
    this.selectDoctor.append(this.renderOptionEl("Therapist"));
    return this.selectDoctor;
  }

  selectDoctorListener() {
    this.selectDoctorEl = this.selectDoctor();
    this.selectDoctorEl.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }

  nameInput() {
    const nameInput = new Input(["input"], "", "name");
    return new Label(["label", "d-block"], `Name`, nameInput.create());
  }

  selectUrgency() {
    this.labelUrgency = this.renderLabelEl(
      ["label", "d-block"],
      "Select urgency"
    );
    this.selectUrgency = this.renderLabelChildren("");
    this.selectUrgency.append(this.renderOptionEl("High"));
    this.selectUrgency.append(this.renderOptionEl("Normal"));
    this.selectUrgency.append(this.renderOptionEl("Low"));
    this.labelUrgency.append(this.selectUrgency);
    return this.labelUrgency;
  }

  targetInput() {
    const targetInput = new Input(["input"], "", "target");
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
          required: "",
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
  handleCloseClick() {
    this.element.remove();
  }
}

export default Visit;
