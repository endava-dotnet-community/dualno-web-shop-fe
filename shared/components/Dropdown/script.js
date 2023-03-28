const wrapper = document.querySelector('.ws-select');
const selectBtn = wrapper.querySelector('.select-btn');
const options = wrapper.querySelector('.options');
const selectBtnText = selectBtn.querySelector('span');
const searchInput = wrapper.querySelector('input');

const loadedData = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
  'Category 7',
  'Category 8',
  'Category 9',
  'Category 10',
  'IT',
  'Medic',
  'Fashion',
  'Toys',
  'Sport',
];

const selectItem = (element) => {
  selectBtnText.innerHTML = element.innerText;
  wrapper.classList.remove('active');
  searchInput.value = '';
  setItems(loadedData, element.innerText);
}

const setItems = (data, selectedItem = '') => {
  options.innerHTML = '';
  data.forEach((item) => {
    let selectClass = item === selectedItem ? 'selected' : '';
    let liElement = `<li onClick="selectItem(this)" class="${selectClass}">${item}</li>`;
    options.insertAdjacentHTML('beforeend', liElement);
  });
};

selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
  searchInput.value = '';
  setItems(loadedData, selectBtnText.innerText);
});

searchInput.addEventListener('keyup', () => {
  let resoult = [];
  let searchValue = searchInput.value;
  let searchValueLowerCase = searchValue.toLocaleLowerCase();
  resoult = loadedData.filter(item => item.toLocaleLowerCase().startsWith(searchValueLowerCase));
  if(!!resoult.length) setItems(resoult, selectBtnText.innerText);
  else options.innerHTML = `<p>Oops! Nothing found</p>`
});