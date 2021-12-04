import Element from './classEL.js';
import Button from './classButton.js';
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
    this.headerLogoContainer.append(this.headerLogo);
    this.headerEl.append(
      this.headerLogoContainer,
      this.headerButtonEl.create()
    );
    return this.headerEl;
  }
}

export default ElementHeader;
