import visitCardiologist from '../class/classVisitCardiologist.js';
import visitDentist from '../class/classVisitDentist.js';
import visitTherapist from '../class/classVisitTherapist.js';

const changeVisitModal = () => {
  const selectEl = document.querySelector('#select-doctor');
  const modal = document.querySelector('.modal');
  selectEl.addEventListener('change', (e) => {
    if (e.target.value === 'Cardiologist') {
      modal.remove();
      const cardiologist = new visitCardiologist();
      cardiologist.render();
    } else if (e.target.value == 'Dentist') {
      modal.remove();
      const dentist = new visitDentist();
      dentist.render();
    } else if (e.target.value == 'Therapist') {
      modal.remove();
      const therapist = new visitTherapist();
      therapist.render();
    }
  });
};

export default changeVisitModal;
