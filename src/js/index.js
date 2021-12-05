'use strict';
import '../css/main.css';
import '../img/logo.png';
import '../css/reset.css';
import Element from './class/classEL.js';
import ElementHeader from './class/classHeader.js';
import FilterEl from './class/classFilter.js';

function createHtml() {
  const body = document.body;
  const container = new Element();
  const containerEl = container.createElement('div', ['container']);
  containerEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__button')) {
      e.target.innerHTML = 'Создать визит';
    }
  });
  const headerEl = new ElementHeader();
  const filterEl = new FilterEl();
  containerEl.append(headerEl.render(), filterEl.render());
  return body.append(containerEl);
}

createHtml();
