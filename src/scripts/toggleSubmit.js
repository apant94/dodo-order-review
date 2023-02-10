import { submitBtn, termsInput } from "../utils/constants.js";

// Изменение активности кнопки сабмита в зависимости от checked
const toggleButtonState = () => {
  if (termsInput.checked) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.remove('form__submit_inactive');
  } else {
    submitBtn.setAttribute('disabled', true);
    submitBtn.classList.add('form__submit_inactive');
  };
};

termsInput.addEventListener('change', toggleButtonState);