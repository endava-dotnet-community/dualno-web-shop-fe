import { loginUser } from "./async/users.js";
import { getAllProducts } from "./async/product.js";
import { state } from "./async/state.js";

const wrapper = document.querySelector('.mainContent');
const inputs = wrapper.querySelectorAll('.ws-input');
const usernameInput = inputs[0];
const passwordInput = inputs[1];
const loginButton = wrapper.querySelector('.ws-login-button');

loginButton.addEventListener('click', async () => {
  await getAllProducts();
});


usernameInput.addEventListener('click', () => {
  console.log(response);
});