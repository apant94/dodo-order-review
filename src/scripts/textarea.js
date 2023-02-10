import { textarea, counter } from "../utils/constants.js";

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