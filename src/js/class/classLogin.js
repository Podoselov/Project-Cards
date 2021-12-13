import Input from './classInput.js';
import Label from './classLabel.js';
import Button from './classButton.js';
import Modal from './classModal.js';
import getLogin from '../fetch/getUserToken.js';
import token from '../fetch/token.js';
import Card from './classCard.js';
import getCards from '../fetch/getCards.js';
class Login {
  constructor() {
    this.closeBtn = this.closeBtn().create();
    this.loginBtn = this.loginBtn().create();
    this.email = this.emailInput().create();
    this.password = this.passwordInput().create();
    this.element = this.createModal().create();
    this.btnHeader = document.querySelector('.header__button');
    this.newBtnHeader = document.querySelector('.header__button-new');
    this.localEmail = localStorage.getItem('email');
    this.localPassword = localStorage.getItem('password');
  }
  render() {
    window.onload = () => {
      this.email.firstElementChild.value = localStorage.getItem('email');
      this.password.firstElementChild.value = localStorage.getItem('password');
    };
    onload();
    document.body.prepend(this.element);
    this.closeBtn.addEventListener('click', this.handleCloseClick.bind(this));
    this.loginBtn.addEventListener('click', this.handleLoginClick.bind(this));
  }
  createModal() {
    return new Modal([this.email, this.password, this.loginBtn, this.closeBtn]);
  }

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

  loginBtn() {
    return new Button(['button', 'login-button'], 'login-button', 'Log in');
  }

  async handleLoginClick(btnRemoveEl) {
    const tokenValue = await getLogin(
      this.email.firstElementChild.value,
      this.password.firstElementChild.value
    );
    if (tokenValue === token) {
      localStorage.setItem('email', this.email.firstElementChild.value);
      localStorage.setItem('password', this.password.firstElementChild.value);
      this.email.firstElementChild.value = '';
      this.password.firstElementChild.value = '';
      this.handleCloseClick();
      this.btnHeader.classList.add('d-none');
      this.newBtnHeader.classList.remove('d-none');
      this.cardEl = await getCards(token);
      this.cardEl.forEach((el) => {
        const card = new Card(el);
        card.render();
      });
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
