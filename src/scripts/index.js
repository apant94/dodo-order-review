import '../pages/index.css';

const textarea = document.querySelector('.form__comment');
const counter = document.querySelector('.form__comment-number');
const fileInput = document.querySelector('.form__file');
const fileText = document.querySelector('.form__file-text');
const phoneInput = document.querySelector('.form__phone');
const termsInput = document.querySelector('.form__terms');
const submitBtn = document.querySelector('.form__submit');

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
// function getInputNumbersValue(input) {
//   return input.value.replace(/\D/g, '');
// }

// function onPhoneInput(e) {
//   const input = e.target;
//   const inputNumbersValue = getInputNumbersValue(input);

//   if (!inputNumbersValue) {
//     return input.value = '';
//   };
// };

function onPhoneClick() {
  return phoneInput.value = '+7';
}

phoneInput.addEventListener('click', onPhoneClick);
// phoneInput.addEventListener('input', onPhoneInput);

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