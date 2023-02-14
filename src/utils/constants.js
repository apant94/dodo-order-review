const body = document.querySelector('.root');
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
const rtStars = document.querySelectorAll('.form__rating-item');
const rt4 = document.querySelector('#rating4');
const rt5 = document.querySelector('#rating5');
const starPath = document.querySelector('#star-path');
const rateErrorText = document.querySelector('.form__error-text_position_normal');
const phoneErrorText = document.querySelector('.form__error-text_position_extra');
const phoneParagraphText = document.querySelector('.form__paragraph_visible');
const footerYear = document.querySelector('.footer__copyright');


export { body, form, textarea, counter, fileInput, fileText, phoneInput, termsInput, submitBtn, popup, popupText, rtStars, rt4, rt5, starPath, rateErrorText, phoneErrorText, phoneParagraphText, footerYear };