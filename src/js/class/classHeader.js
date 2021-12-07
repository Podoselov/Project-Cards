import Element from './classEL.js';
import Button from './classButton.js';
import Login from './classLogin.js';
class ElementHeader extends Element {
  constructor() {
    super();
  }

  render() {
    this.headerEl = this.createElement('header', ['page__header', 'header']);
    this.headerLogoContainer = this.createElement('a', ['header__logo-link'], {
      href: '#',
    });
    this.headerLogo = this.createElement('img', ['header__logo'], {
      src: 'images/logo.png',
      width: '100px',
    });
    this.headerButtonEl = new Button(
      ['header__button', 'button'],
      'log-in-button',
      'Log in'
    );
    this.headerBtnEl = this.headerButtonEl.create();
    this.buttonClick(this.headerBtnEl);
    this.headerLogoContainer.append(this.headerLogo);
    this.headerEl.append(this.headerLogoContainer, this.headerBtnEl);
    return this.headerEl;
  }

  buttonClick(btnEl) {
    btnEl.addEventListener('click', (e) => {
      e.preventDefault();
      const loginModal = new Login();
      return loginModal.render();
    });
  }

  buttonToggleClass() {
    this.newHeaderButtonEl = new Button(
      ['header__button-new', 'button'],
      'create-button',
      'Create a visit'
    );
    this.headerButtonEl.remove();
    this.headerEl.append(this.newHeaderButtonEl.create());
  }
}

export default ElementHeader;
