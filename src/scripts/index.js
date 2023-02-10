import '../pages/index.css';
import { form, textarea, counter, fileInput, fileText, phoneInput, termsInput, submitBtn, popup, popupText, rtStars, rt4, rt5, starPath, rateErrorText, phoneErrorText, phoneParagraphText } from '../utils/constants.js';
// import './validation.js';
// import { hasInvalidInputs } from './validation.js';

// Растягивание textarea по мере заполнения отзыва и заполнение счетчика
function putComment() {
  textarea.setAttribute('style', 'height:' + (textarea.scrollHeight - 38) + 'px;');
  textarea.addEventListener('input', onCommentInput, false);
  textarea.addEventListener('input', countSymbols);
};

function onCommentInput() {
  this.style.height = '54px';
  this.style.height = (this.scrollHeight - 38) + 'px';
};

// устанавливаем счетчик символов
function countSymbols() {
  counter.textContent = `${textarea.value.length}`;
};

putComment();


// Отображение количества выбранных файлов
function countFiles() {
  let fileCounter = '';

  if (this.files && this.files.length >= 1) {
    fileCounter = this.files.length;
  }

  if (fileCounter) {
    fileText.textContent = 'Выбрано файлов: ' + fileCounter;
  }
};

fileInput.addEventListener('change', countFiles);


// Добавление маски в виде +7 и пробелов на input телефона
function onPhoneInput() {
  // устанавливаем ограничение на буквы и остальные символы
  const phoneNumber = this.value.replace(/[^\d+]/g,'');
  
  //устанавливаем пробелы в нужных местах
  let newNumber = '';
  for (let i = 0; i < Math.min(phoneNumber.length, 12); i++) {
    newNumber += phoneNumber[i];
    if ((i == 1) || (i == 4) || (i == 7) || (i == 9)) {
      newNumber += ' ';
    }
  }
  this.value = newNumber;
};

let isPhoneClicked = false;

function onPhoneClick() {
  if(!isPhoneClicked) {
  // устанавливаем изначальное значение +7
  phoneInput.value = '+7';
  // меняем значение флага, чтобы функция работала только увпри первом клике
  isPhoneClicked = true;
  return;
  }
};

phoneInput.addEventListener('click', onPhoneClick);
phoneInput.addEventListener('input', onPhoneInput);

// изменение активности кнопки сабмита в зависимости от checked
const toggleButtonState = () => {
  if (termsInput.checked) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.remove('form__submit_inactive');
  } else {
    submitBtn.setAttribute('disabled', true);
    submitBtn.classList.add('form__submit_inactive');
  }
};

termsInput.addEventListener('change', toggleButtonState);


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


// Редактируем текст попапа в зависимости от оценки
// открытие попапа
function openPopup() {
  popup.classList.add('popup_opened');
};
// изменение ширины поля с текстом для реализации необходимых переносов
function editPopupTextWidth(width) {
  popupText.style.width = `${width}%`;
};

// изменение текста в попапе
function editPopupText() {
  if (rt5.checked) {
    popupText.textContent = 'Спасибо! Рады, что вам понравилось.';
  } else if (rt4.checked) {
    popupText.textContent = 'Спасибо! Будем стараться, чтобы ваша оценка улучшилась.';
    editPopupTextWidth(58);
  } else {
    popupText.textContent = 'Спасибо! Нам жаль, что так вышло. Мы разберемся и свяжемся с вами.';
  }
}; 

// добавляет класс с ошибкой телефона
const showPhoneError = () => {
  phoneInput.classList.add('form__phone_type_error');
  phoneErrorText.removeAttribute('hidden');
  phoneParagraphText.style.visibility = 'hidden';
};

//удаляет класс с ошибкой телефона
const hidePhoneError = () => {
  phoneInput.classList.remove('form__phone_type_error');
  phoneErrorText.setAttribute('hidden', '');
  phoneParagraphText.style.visibility = 'visible';
};

// добавляет класс с ошибкой рейтинга звезд
const showRatingError = () => {
  starPath.setAttribute('stroke', "#FF3B30");
  rateErrorText.removeAttribute('hidden');
};

// удаляет класс с ошибкой рейтинга звезд
const hideRatingError = () => {
  starPath.setAttribute('stroke', "#FF6900");
  rateErrorText.setAttribute('hidden', '');
};

// проверяет наличие невалидного телефона
const hasInvalidPhoneInput = () => {
  return !phoneInput.validity.valid;
}; 

// проверяет наличие невалидного рейтинга
const hasInvalidRatingInput = () => {
  return Array.from(rtStars).some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// проверяет наличие невалидных полей при вводе
const isValidRating = () => {
    Array.from(rtStars).forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      showRatingError();
    } else {
      hideRatingError();
    };
  });
};

const isValidPhone = () => {
  if (hasInvalidPhoneInput()) {
    showPhoneError();
  } else {
    hidePhoneError();
  };
}

// проверяет наличие невалидных полей при сабмите
const hasInvalidInputs = (e) => {
  e.preventDefault();
  if (hasInvalidRatingInput()) {
    isValidRating();
  };

  if (hasInvalidPhoneInput()) {
    isValidPhone();
  };

  if (!hasInvalidRatingInput() && !hasInvalidPhoneInput()) {
    editPopupText()
    openPopup();
  };
};

// function onSubmit(e) {
//   e.preventDefault();

//   if (hasInvalidInputs) {
//     return;
//   };
//   if (!hasInvalidInputs) {
//   editPopupText()
//   openPopup();
//   }
// };

Array.from(rtStars).forEach((inputElement) => {
  inputElement.addEventListener('input', isValidRating);
});
phoneInput.addEventListener('input', isValidPhone);
form.addEventListener('submit', hasInvalidInputs);

// form.addEventListener('submit', onSubmit); 

