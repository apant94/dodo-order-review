import './index.css';

// Растягивание по мере заполнения отзыва

const textarea = document.querySelector('.form__comment');

// textarea.addEventListener('keyup', function(){
//   console.log(this.style);
//   if(this.scrollTop > 0){
//     this.style.height = this.scrollHeight + "px";
//   }
// });

function putComment() {
  textarea.setAttribute("style", "height:" + (textarea.scrollHeight - 30) + "px;");
  textarea.addEventListener("input", onInput, false);
};

function onInput() {
  this.style.height = '28px';
  this.style.height = (this.scrollHeight) + "px";
};

putComment();