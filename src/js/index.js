('use strict');
import '../css/reset.css';
import '../css/main.css';
import '../img/logo.png';
import Element from './class/classEL.js';
import ElementHeader from './class/classHeader.js';
import FilterEl from './class/classFilter.js';
import token from './fetch/token';
import Card from './class/classCard';
import getCards from './fetch/getCards';

function createHtml() {
  const body = document.body;
  const container = new Element();
  const containerEl = container.createElement('div', ['container']);
  const headerEl = new ElementHeader();
  const filterEl = new FilterEl();
  const containerCardEl = container.createElement(
    'div',
    ['cards-container', 'container'],
    {},
    '<p class="no-items">No items have beed added</p>'
  );

  containerEl.append(headerEl.render(), filterEl.render());

  return body.append(containerEl, containerCardEl);
}

async function createLoginHTML() {
  createHtml();
  document.querySelector('.header__button').classList.add('d-none');
  document.querySelector('.header__button-new').classList.remove('d-none');
  const cards = await getCards(token);
  if (cards.length !== 0) {
    document.querySelector('.cards-container').innerHTML = '';
    cards.forEach((el) => {
      const card = new Card(el);
      card.render();
    });
  }
}

if (localStorage.getItem('email')) {
  createLoginHTML();
} else {
  createHtml();
}

// document.onclick = function (event) {
//   if (event.target.className != "modal") {
//     container.remove();
//   }
// };

// const visit = new Visit();
// const visitCardiologist = new VisitCardiologist();
// const visitDentist = new VisitDentist();
// const visitTherapist = new VisitTherapist();
// visit.render();
