const refs = {
  form: document.querySelector('.feedback-form'),
};

const formEmail = refs.form.querySelector('[type = "email"]');
const formMesage = refs.form.querySelector('textArea');

const FORM_STATE = 'feedback-form-state';

const getLocalStorageForm = () => {
  if (localStorage.getItem(FORM_STATE)) {
    const readStorage = JSON.parse(localStorage.getItem(FORM_STATE));
    readStorage.email = readStorage.email ? readStorage.email : '';
    readStorage.message = readStorage.message ? readStorage.message : '';
    return readStorage;
  }
  return { email: '', message: '' };
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
  refs.form.reset();
  localStorage.removeItem(FORM_STATE);
  console.log('after submit formData: ', formData);
  formData.email = '';
  formData.message = '';
};

//read formData from LocalStorage
const formData = getLocalStorageForm();
//write from FormDafda to form
formInit(formData);

refs.form.addEventListener('input', setLocalStorageForm);
refs.form.addEventListener('submit', onSubmitBtn);
