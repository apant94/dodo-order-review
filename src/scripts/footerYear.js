import { footerYear } from '../utils/constants.js';
const year = new Date();

footerYear.textContent = `© ${year.getFullYear()}`;
