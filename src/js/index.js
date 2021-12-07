('use strict');

import '../css/main.css';
import '../img/logo.png';
import '../css/reset.css';
import Element from './class/classEL.js';
import ElementHeader from './class/classHeader.js';
import FilterEl from './class/classFilter.js';
import Login from './class/classLogin.js';
import Visit from './class/classVisit';
import VisitDentist from './class/classVisitDentist';
import VisitCardiologist from './class/classVisitCardiologist';
import VisitTherapist from './class/classVisitTherapist';
import getLogin from './fetch/getUserToken.js';
import logInBtn from './listener/headerListener';

function createHtml() {
  const body = document.body;
  const container = new Element();
  const containerEl = container.createElement('div', ['container']);

  const headerEl = new ElementHeader();
  const filterEl = new FilterEl();
  containerEl.append(headerEl.render(), filterEl.render());
  return body.append(containerEl);
}

createHtml();

// const visit = new Visit();
// visit.render()

// document.querySelector('#select-doctor-card').addEventListener('change', () => {
//   const value = document.querySelector('#select-doctor-card').value;
//   console.log(value);
//   if (value === 'Cardiologist') {
//     document.querySelector('.modal').remove();
//     visitCardiologist.render();
//   } else if (value == 'Dentist') {
//     document.querySelector('.modal').remove();
//     visitDentist.render();
//   } else if (value == 'Therapist') {
//     document.querySelector('.modal').remove();
//     visitTherapist.render();
//   }
// });
