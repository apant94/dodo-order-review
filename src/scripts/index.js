import '../pages/index.css';

const form = document.querySelector('.form');
const textarea = document.querySelector('.form__comment');
const counter = document.querySelector('.form__comment-number');
const fileInput = document.querySelector('.form__file');
const fileText = document.querySelector('.form__file-text');
const phoneInput = document.querySelector('.form__phone');
const termsInput = document.querySelector('.form__terms');
const submitBtn = document.querySelector('.form__submit');
const popup = document.querySelector('.popup');
const popupText = popup.querySelector('.popup__text');

// Растягивание textarea по мере заполнения отзыва и заполнение счетчика
function putComment() {
  textarea.setAttribute("style", "height:" + (textarea.scrollHeight - 38) + "px;");
  textarea.addEventListener("input", onCommentInput, false);
  textarea.addEventListener("input", countSymbols);
};

function onCommentInput() {
  this.style.height = '54px';
  this.style.height = (this.scrollHeight - 38) + "px";
};

function countSymbols() {
  counter.textContent = `${textarea.value.length}`;
};

putComment();


// Отображение количества выбранных файлов
function countFiles(evt) {
  let fileCounter = '';

  if (this.files && this.files.length >= 1) {
    fileCounter = this.files.length;
  }

  if (fileCounter) {
    fileText.textContent = 'Выбрано файлов: ' + fileCounter;
  }
}

fileInput.addEventListener('change', countFiles);


// Добавление маски в виде +7 на input телефона
function onPhoneInput(e) {
  // устанавливаем ограничение на буквы и остальные символы
  phoneInput.value = e.target.value.replace(/[^\d+]/g,'');
};

function onPhoneClick() {
  // устанавливаем изначальное значение +7
  return phoneInput.value = '+7';
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

termsInput.addEventListener('change', toggleButtonState)


// редактируем текст попапа в зависимости от оценки
// открытие попапа
function openPopup() {
  popup.classList.add('popup_opened');
}
// изменяем ширину поля с текстом для реализации необходимых переносов
function editPopupTextWidth(width) {
  popupText.style.width = `${width}%`;
}

function editPopupText() {
  const rt4 = document.querySelector('#rating4');
  const rt5 = document.querySelector('#rating5');

  if (rt5.checked) {
    popupText.textContent = 'Спасибо! Рады, что вам понравилось.'; 
  } else if (rt4.checked) {
    popupText.textContent = 'Спасибо! Будем стараться, чтобы ваша оценка улучшилась.';
    editPopupTextWidth(58);
  } else {
    popupText.textContent = 'Спасибо! Нам жаль, что так вышло. Мы разберемся и свяжемся с вами.'; 
  }
}; 

function onSubmit(e) {
  e.preventDefault();
  editPopupText()
  openPopup();
}

form.addEventListener('submit', onSubmit); 