import Input from "./classInput.js";
import Label from "./classLabel.js";
import Button from "./classButton.js";
import Modal from "./classModal.js";

class Login {
  constructor() {
    this.closeBtn = this.closeBtn().create();
    this.loginBtn = this.loginBtn().create();
    this.email = this.emailInput().create();
    this.password = this.passwordInput().create();
    this.element = this.createModal().create();
  }
  render() {
    console.log(this.password);
    document.body.prepend(this.element);
    this.closeBtn.addEventListener("click", this.handleCloseClick.bind(this));
  }
  createModal() {
    return new Modal([
      this.emailInput().create(),
      this.password,
      this.loginBtn,
      this.closeBtn,
    ]);
  }
  handleCloseClick() {
    this.element.remove();
  }
  emailInput() {
    const emailInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Email`, emailInput.create());
  }
  passwordInput() {
    const passwordInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Password`, passwordInput.create());
  }
  closeBtn() {
    return new Button(["close-button"], "close-button", "x");
  }
  loginBtn() {
    return new Button(["button"], "login-button", "Log in");
  }
}

export default Login;
