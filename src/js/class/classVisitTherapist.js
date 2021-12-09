import Input from "./classInput.js";
import Label from "./classLabel.js";
import Modal from "./classModal.js";
import Visit from "./classVisit.js";
import Card from "./classCard";

const token = `6437b668-8958-4db2-9491-e121b2a4c327`;
class VisitTherapist extends Visit {
  constructor() {
    super();
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
      this.age,
      this.createBtn,
      this.closeBtn,
    ]);
    this.doctor
      .querySelector("select")
      .querySelector(`option[value='Therapist'`)
      .setAttribute("selected", "");
    return modal;
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
        age: `${this.age.querySelector("input").value}`,
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
        age: `${this.age.querySelector("input").value}`,
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

export default VisitTherapist;
