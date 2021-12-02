import Element from './classEL.js';

class ElementHeader extends Element {
  constructor() {
    super();
  }

  renderHeader() {
    this.headerEl = this.createElement('header', ['page__header', 'header']);
    this.headerLogoContainer = this.createElement('a', ['header__logo-link'], {
      href: '#',
    });
    this.headerLogo = this.createElement('img', ['header__logo'], {
      src: 'images/logo.png',
      width: '100px',
    });
    this.headerButtonEl = this.createElement(
      'button',
      ['header__button', 'button'],
      {
        id: 'log-in-button',
      },
      'Log in'
    );
    this.headerLogoContainer.append(this.headerLogo);
    this.headerEl.append(this.headerLogoContainer, this.headerButtonEl);
    return this.headerEl;
  }
}

export default ElementHeader;
