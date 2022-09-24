import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formEmail = refs.form.querySelector('[type = "email"]');
const formMesage = refs.form.querySelector('textArea');

const FORM_STATE = 'feedback-form-state';

const getLocalStorageForm = () => {
  let readStorage = { email: '', message: '' };
  if (localStorage.getItem(FORM_STATE)) {
    readStorage = { ...JSON.parse(localStorage.getItem(FORM_STATE)) };
  }
  return readStorage;
};

const setLocalStorageForm = e => {
  formData[e.target.name] = e.target.value;
  // console.log(formData);
  localStorage.setItem(FORM_STATE, JSON.stringify(formData));
};

const formInit = form => {
  // console.log('formEmail: ', formEmail);
  // console.log('textArea: ', formMesage);
  formEmail.value = form.email;
  formMesage.value = form.message;
};

const onSubmitBtn = e => {
  e.preventDefault();
  // console.log(e.target);
  console.log(formData);
  refs.form.reset();
  localStorage.removeItem(FORM_STATE);
  formData = { ...getLocalStorageForm() };
};

//read formData from LocalStorage
let formData = getLocalStorageForm();
//write from FormDafda to form
formInit(formData);

refs.form.addEventListener('input', throttle(setLocalStorageForm, 500));
refs.form.addEventListener('submit', onSubmitBtn);
