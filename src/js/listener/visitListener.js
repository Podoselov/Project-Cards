import visitCardiologist from '../class/classVisitCardiologist';
import visitDentist from '../class/classVisitDentist';
import visitTherapist from '../class/classVisitTherapist';

const selectDoctorListener = (e) => {
  const modalEl = document.querySelector('.modal');
  if (e.target.value === 'Cardiologist') {
    modalEl.remove();
    const modalCardiologist = new visitCardiologist();
    modalCardiologist.render();
  } else if (e.target.value == 'Dentist') {
    modalEl.remove();
    const modalDentist = new visitDentist();
    modalDentist.render();
  } else if (e.target.value == 'Therapist') {
    modalEl.remove();
    const modalTherapist = new visitTherapist();
    modalTherapist.render();
  }
};

export default selectDoctorListener;
