import { popup, popupText, rt4, rt5 } from '../utils/constants.js';

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

export { openPopup, editPopupText };