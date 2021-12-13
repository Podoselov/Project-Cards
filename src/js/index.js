('use strict');

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
  const headerEl = new ElementHeader();
  const filterEl = new FilterEl();
  const containerCardEl = container.createElement('div', [
    'cards-container',
    'container',
  ]);

  containerEl.append(headerEl.render(), filterEl.render());

  return body.append(containerEl, containerCardEl);
}

createHtml();
// const visit = new Visit();
// const visitCardiologist = new VisitCardiologist();
// const visitDentist = new VisitDentist();
// const visitTherapist = new VisitTherapist();
// visit.render();
