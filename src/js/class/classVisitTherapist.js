import Input from "./classInput";
import Label from "./classLabel";
import Modal from "./classModal";
import Visit from "./classVisit";
import Card from "./classCard";
import selectDoctorListener from "../listener/visitListener.js";
import postVisitFetch from "../fetch/postVisitFetch.js";
import putVisitCard from "../fetch/putVisitCard.js";
import token from "../fetch/token.js";
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
    this.doctor.addEventListener("change", (e) => {
      selectDoctorListener(e);
    });
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

  setPostObj() {
    return {
      name: `${this.name.querySelector("input").value}`,
      description: `${this.description.querySelector("textarea").value}`,
      doctor: `${this.doctor.querySelector("select").value}`,
      urgency: `${this.urgency.querySelector("select").value}`,
      target: `${this.target.querySelector("input").value}`,
      age: `${this.age.querySelector("input").value}`,
    };
  }

  async createCard() {
    if (
      this.target.querySelector("input").value !== "" &&
      this.name.querySelector("input").value !== "" &&
      this.age.querySelector("input").value !== ""
    ) {
      if (document.querySelector(".no-items")) {
        document.querySelector(".no-items").remove();
      }
      const response = await postVisitFetch(this.setPostObj(), token);
      const card = new Card(await response);
      card.render();
      this.element.remove();
    }
  }

  async upgradeCard() {
    const response = await putVisitCard(
      this.element.id,
      this.setPostObj(),
      token
    );
    document.getElementById(`card-${this.element.id}`).remove();
    const card = new Card(await response);
    card.render();
    this.element.remove();
  }
}

export default VisitTherapist;
