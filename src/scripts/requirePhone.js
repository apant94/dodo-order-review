import { phoneInput, rt4, rt5, rtStars } from "../utils/constants.js";

// Установление обязательного введения номера телефона в зависимости от выбранной оценки
// удаление атрибута 'обязательно' на инпуте телефона
function deleteRequiredPhone() {
  phoneInput.removeAttribute('required');
  phoneInput.removeAttribute('minlength');
};

// добавление атрибута 'обязательно' на инпуте телефона
function putRequiredPhone() {
  phoneInput.setAttribute('required', '');
  phoneInput.setAttribute('minlength', '16');
};

// функция изменения состояния
function editRequiredOnPhoneInput() {
  if (rt4.checked || rt5.checked) {
    deleteRequiredPhone();
  } else {
    putRequiredPhone();
  }
};

Array.from(rtStars).forEach((star) => {
  star.addEventListener('change', editRequiredOnPhoneInput);
});