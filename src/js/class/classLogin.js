import Input from "./classInput.js";
import Label from "./classLabel.js";
import Button from "./classButton.js";
import Modal from "./classModal.js";

const emailInput = new Input(["input"], "");
const emailInputLabel = new Label(
  ["label", "d-block"],
  `Email`,
  emailInput.create()
);
const passwordInput = new Input(["input"], "");
const passwordInputLabel = new Label(
  ["label", "d-block"],
  `Password`,
  passwordInput.create()
);

const loginButton = new Button(["button"], "login-button", "Log in");
const closeBtn = new Button(["close-button"], "close-button", "x");

class Login {
  constructor() {
    this.element = null;
  }
  render() {
    this.element = new Modal([
      emailInputLabel.create(),
      passwordInputLabel.create(),
      loginButton.create(),
      closeBtn.create(),
    ]);
    this.element.create();
  }
}

export default Login;
