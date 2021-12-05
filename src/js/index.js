"use strict";
import "../css/main.css";
import "../img/logo.png";
import "../css/reset.css";
import ElementHeader from "./class/classHeader.js";
import Button from "./class/classButton.js";
import Select from "./class/classSelect.js";
import FilterEl from "./class/classFilter.js";
import Modal from "./class/classModal.js";
import Label from "./class/classLabel";
import Input from "./class/classInput";
import Login from "./class/classLogin.js";
import Visit from "./class/classVisit";
import VisitDentist from "./class/classVisitDentist";
import VisitCardiologist from "./class/classVisitCardiologist";
import VisitTherapist from "./class/classVisitTherapist";
import { getCards } from "./cards/cards-new";

const el = new ElementHeader();
el.render();
const filter = new FilterEl();
filter.render();
const loginModal = new Login();




const handleChangePopup = (value) => {
    document.querySelector(".modal").remove();

    if (value === "Cardiologist") {
        visitCardiologist.render();
    } else if (value == "Dentist") {
        visitDentist.render();
    } else if (value == "Therapist") {
        visitTherapist.render();
    }
};

const visitDentist = new VisitDentist(handleChangePopup);
const visitCardiologist = new VisitCardiologist(handleChangePopup);
const visitTherapist = new VisitTherapist(handleChangePopup);

const addPopupButton = new Button("test-clases", "test-id", "text button").create();
document.body.append(addPopupButton);

const visit = new Visit(handleChangePopup);
addPopupButton.addEventListener('click', () => {
    visit.render();
});





// loginModal.render();
// visit.render();
// visitCardiologist.render();
// visitDentist.render();
// visitTherapist.render();

// document.querySelector("#select-doctor-card").addEventListener("change", () => {
//   const value = document.querySelector("#select-doctor-card").value;
//   console.log(value);
//   if (value === "Cardiologist") {
//     document.querySelector(".modal").remove();
//     visitCardiologist.render();
//   } else if (value == "Dentist") {
//     document.querySelector(".modal").remove();
//     visitDentist.render();
//   } else if (value == "Therapist") {
//     document.querySelector(".modal").remove();
//     visitTherapist.render();
//   }
// });
