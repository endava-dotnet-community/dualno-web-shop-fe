const searchButton = document.querySelector('.logo-group1 img');
const container = document.querySelector('.logo-group1');

searchButton.addEventListener('click', () => {
    container.classList.toggle('active');
});