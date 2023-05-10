import { state } from "../async/state.js";

console.log('state: ', state);

const filterButton = document.querySelector('.productManipulations .ws-filter-button');
const filterOptions = document.querySelector('.productFilterOption');

filterButton.addEventListener('click', () => {
    filterOptions.classList.toggle('active');
    filterButton.classList.toggle('active');
});