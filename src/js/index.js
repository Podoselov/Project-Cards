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

const el = new ElementHeader();
el.render();
const filter = new FilterEl();
filter.render();

// Селекты, кнопки, инпуты
const selectDoctor = new Select(
  "",
  '<option value="">Dentist</option><option value="">Cardiologist</option><option value="">Therapist</option>'
);
const selectDoctorLabel = new Label(
  ["label", "d-block"],
  `Select doctor`,
  selectDoctor.createSelect()
);

const selectUrgency = new Select(
  "",
  '<select class="select" name="" id=""><option value="">High</option><option value="">Normal</option><option value="">Low</option>'
);
const selectUrgencyLabel = new Label(
  ["label", "d-block"],
  `Select urgency`,
  selectUrgency.createSelect()
);

const emailInput = new Input(["input"], "");
const emailInputLabel = new Label(
  ["label", "d-block"],
  `Email`,
  emailInput.createInput()
);
const passwordInput = new Input(["input"], "");
const passwordInputLabel = new Label(
  ["label", "d-block"],
  `Password`,
  passwordInput.createInput()
);

const loginButton = new Button(['button'], 'login-button', 'Log in');
const closeBtn = new Button(["close-button"], "close-button", "x");

// Модалки
const LoginModal = new Modal([
  emailInputLabel.createLabel(),
  passwordInputLabel.createLabel(),
  loginButton.createButton(),
  closeBtn.createButton(),
]);

LoginModal.createModal();
