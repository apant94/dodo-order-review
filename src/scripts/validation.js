import { phoneInput } from '../utils/constants.js';

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('form__phone_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__phone_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!phoneInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(phoneInput);
  } else {
    // Если проходит, скроем
    hideInputError(phoneInput);
  }
};

// Вызовем функцию isValid на каждый ввод символа
phoneInput.addEventListener('input', isValid);