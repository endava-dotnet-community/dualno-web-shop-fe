import { initState, actions } from '../async/state.js';
import { state } from '../async/state.js';
import { 
  navMenuHeading as navMenuHeadingMessages,
  ad as adMessages,
} from '../../messages/homePage.js';

const selectElement = document.querySelector('.ws-language-picker');
const navMenuHeading = document.querySelector('.nav-bar');
const navMenuItems = navMenuHeading.querySelectorAll('a');
const adContainer = document.querySelector('.promoText');
const adTitle = adContainer.querySelector('h1');
const ad = adContainer.querySelector('p');

selectElement.addEventListener('change', () => {
  navMenuItems[0].innerHTML=navMenuHeadingMessages.shop[selectElement.value];
  navMenuItems[1].innerHTML=navMenuHeadingMessages.aboutUs[selectElement.value];
  navMenuItems[2].innerHTML=navMenuHeadingMessages.cart[selectElement.value];
  adTitle.innerHTML=adMessages.title[selectElement.value];
  ad.innerHTML=adMessages.body[selectElement.value];
});

const productGrid = document.querySelector('.productsGrid');
const categoryNavMenu = document.querySelector('.categoryNavMenu');

initState();

const generateCategoryNavItemHtml = (name) => `<div class="ws-hiperLink"><a href="#">${name}</a></div>`

const generateCardHtml = (name, category, price, lager = 1) => `<div class="productCard">
  <div class="productDisplayGroup">
    <div class="productDisplay">
      <img class="productImage" src="../image/MainPage/product.png" alt="" />
    </div>

    <div class="lager">
      <div class="lagerInfo">
        <p>${lager}</p>
      </div>
      <div class="lagerAction">
        <img src="../image/MainPage/cart-white.png" alt="" />
        <div>
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  </div>
  <div class="productName">
    <h3>${name}</h3>
  </div>

  <div class="product-type-price-group">
    <div class="product-type">
      <p>${category}</p>
    </div>
    <div class="product-price">
      <p>$${price}</p>
    </div>
  </div>
</div>`;

const generateHtml = async () => {
  await actions.updateStateFields();
  let renderCardHtml = '';
  state.products.forEach(product => {
    renderCardHtml += generateCardHtml(product.name, product.category.name, product.price);
  });
  productGrid.innerHTML = renderCardHtml;

  let renderCategorMenuHtml = '';
  state.categories.forEach(cat => {
    renderCategorMenuHtml += generateCategoryNavItemHtml(cat.name);
  });
  categoryNavMenu.innerHTML += renderCategorMenuHtml;
}
generateHtml();


