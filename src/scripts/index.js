import '../pages/index.css';

const textarea = document.querySelector('.form__comment');
const counter = document.querySelector('.form__comment-number');
const fileInput = document.querySelector('.form__file');
const fileText = document.querySelector('.form__file-text');

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
