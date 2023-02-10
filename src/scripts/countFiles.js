import { fileInput, fileText } from "../utils/constants.js";

// Отображение количества выбранных файлов
function countFiles() {
  let fileCounter = '';

  if (this.files && this.files.length >= 1) {
    fileCounter = this.files.length;
  };

  if (fileCounter) {
    fileText.textContent = 'Выбрано файлов: ' + fileCounter;
  };
};

fileInput.addEventListener('change', countFiles);