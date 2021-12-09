import Visit from "./classVisit.js";
import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
import Card from "./classCard";

const token = `6437b668-8958-4db2-9491-e121b2a4c327`;
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
      this.createBtn,
      this.closeBtn,
    ]);
    this.doctor
      .querySelector("select")
      .querySelector(`option[value='Cardiologist'`)
      .setAttribute("selected", "");
    return modal;
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
  handleCreateClick() {
    if (this.createBtn.classList.contains("update")) {
      this.upgradeCard();
    } else {
      this.createCard();
    }
  }
  upgradeCard() {
    console.log("upgrade");
    fetch(`https://ajax.test-danit.com/api/v2/cards/${this.element.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: `${this.element.id}`,
        name: `${this.name.querySelector("input").value}`,
        description: `${this.description.querySelector("textarea").value}`,
        doctor: `${this.doctor.querySelector("select").value}`,
        urgency: `${this.urgency.querySelector("select").value}`,
        pressure: `${this.pressure.querySelector("input").value}`,
        age: `${this.age.querySelector("input").value}`,
        BMI: `${this.BMI.querySelector("input").value}`,
        deseases: `${this.deseases.querySelector("input").value}`,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        document.getElementById(`card-${this.element.id}`).remove();
        const card = new Card(response);
        card.render();
      });
    this.element.remove();
  }
  createCard() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${this.name.querySelector("input").value}`,
        description: `${this.description.querySelector("textarea").value}`,
        doctor: `${this.doctor.querySelector("select").value}`,
        urgency: `${this.urgency.querySelector("select").value}`,
        pressure: `${this.pressure.querySelector("input").value}`,
        age: `${this.age.querySelector("input").value}`,
        BMI: `${this.BMI.querySelector("input").value}`,
        deseases: `${this.deseases.querySelector("input").value}`,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        const card = new Card(response);
        card.render();
      });
    this.element.remove();
  }
}

export default VisitCardiologist;
