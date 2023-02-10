import { phoneInput } from "../utils/constants.js";

// Добавление маски в виде +7 и пробелов на input телефона
let isPhoneClicked = false;

function onPhoneInput() {
  // устанавливаем ограничение на буквы и остальные символы
  const phoneNumber = this.value.replace(/[^\d+]/g,'');
  
  //устанавливаем пробелы в нужных местах
  let newNumber = '';
  for (let i = 0; i < Math.min(phoneNumber.length, 12); i++) {
    newNumber += phoneNumber[i];
    if ((i == 1) || (i == 4) || (i == 7) || (i == 9)) {
      newNumber += ' ';
    };
  };

  this.value = newNumber;
};

function onPhoneClick() {
  if(!isPhoneClicked) {
  // устанавливаем изначальное значение +7
  phoneInput.value = '+7';
  // меняем значение флага, чтобы функция работала только увпри первом клике
  isPhoneClicked = true;
  return;
  };
};

phoneInput.addEventListener('click', onPhoneClick);
phoneInput.addEventListener('input', onPhoneInput);