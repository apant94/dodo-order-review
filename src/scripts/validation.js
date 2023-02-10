import { phoneInput, form, starPath, rtStars, rateErrorText, phoneErrorText, phoneParagraphText } from '../utils/constants.js';

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
const isValid = () => {
  if (hasInvalidPhoneInput()) {
    showPhoneError();
  } else {
    hidePhoneError();
  };

  Array.from(rtStars).forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      showRatingError();
    } else {
      hideRatingError();
    };
  });
};


// проверяет наличие невалидных полей при сабмите
const hasInvalidInputs = (e) => {
  if (hasInvalidPhoneInput()) {
    showPhoneError();
  } else {
    hidePhoneError();
  };

  if (hasInvalidRatingInput()) {
    showRatingError();
  } else {
    hideRatingError();
  };
  
  // if (!hasInvalidRatingInput() && !hasInvalidPhoneInput()) {
  //   e.preventDefault();
  //   form.submit();
  // };
}

Array.from(rtStars).forEach((inputElement) => {
  inputElement.addEventListener('input', isValid);
});
phoneInput.addEventListener('input', isValid);
form.addEventListener('submit', hasInvalidInputs);

export { hasInvalidInputs };