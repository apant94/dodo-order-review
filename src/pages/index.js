import './index.css';

// Растягивание textarea по мере заполнения отзыва и заполнение счетчика

const textarea = document.querySelector('.form__comment');
const counter = document.querySelector(".form__comment-number");

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