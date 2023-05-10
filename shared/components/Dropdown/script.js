import state from "../../../js/async/state";

const wrapper = document.querySelector('.ws-select');
const selectBtn = wrapper.querySelector('.select-btn');
const options = wrapper.querySelector('.options');
const selectBtnText = selectBtn.querySelector('span');
const searchInput = wrapper.querySelector('input');

state.updateState();
const loadedData = state.products.map(currentItem => currentItem.name); // [product[0].name, product[1].name]

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