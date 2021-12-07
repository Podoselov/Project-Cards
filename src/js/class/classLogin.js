import Input from './classInput.js';
import Label from './classLabel.js';
import Button from './classButton.js';
import Modal from './classModal.js';
import getLogin from '../fetch/getUserToken.js';

class Login {
  constructor() {
    this.closeBtn = this.closeBtn().create();
    this.loginBtn = this.loginBtn().create();
    this.email = this.emailInput().create();
    this.password = this.passwordInput().create();
    this.element = this.createModal().create();
  }
  render() {
    document.body.prepend(this.element);
    this.closeBtn.addEventListener('click', this.handleCloseClick.bind(this));
    this.loginBtn.addEventListener('click', this.handleLoginClick.bind(this));
  }
  createModal() {
    return new Modal([this.email, this.password, this.loginBtn, this.closeBtn]);
  }
  //Тут добавил при закрытии что бы не оставались плейсхолдеры при вовторном нажатии
  handleCloseClick() {
    this.email.firstElementChild.value = '';
    this.password.firstElementChild.value = '';
    this.email.firstElementChild.removeAttribute('placeholder');
    this.password.firstElementChild.removeAttribute('placeholder');
    this.element.remove();
  }
  emailInput() {
    const emailInput = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Email`, emailInput.create());
  }
  passwordInput() {
    const passwordInput = new Input(['input'], '');
    return new Label(['label', 'd-block'], `Password`, passwordInput.create());
  }
  closeBtn() {
    return new Button(['close-button'], 'close-button', 'x');
  }
  //тут класс добавил
  loginBtn() {
    return new Button(['button', 'login-button'], 'login-button', 'Log in');
  }
  //Добавил с логином взаимодействие
  async handleLoginClick() {
    const tokenValue = await getLogin(
      this.email.firstElementChild.value,
      this.password.firstElementChild.value
    );
    if (tokenValue === `6437b668-8958-4db2-9491-e121b2a4c327`) {
      this.email.firstElementChild.value = '';
      this.password.firstElementChild.value = '';
      this.handleCloseClick();
    } else {
      this.email.firstElementChild.value = '';
      this.password.firstElementChild.value = '';
      this.email.firstElementChild.setAttribute(
        'placeholder',
        'please try again'
      );
      this.password.firstElementChild.setAttribute(
        'placeholder',
        'please try again'
      );
    }
  }
}

export default Login;
