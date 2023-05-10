import { loginUser } from "./async/users.js";
import { state } from "./async/state.js";

const wrapper = document.querySelector('.mainContent');
const inputs = wrapper.querySelectorAll('.ws-input');
const usernameInput = inputs[0];
const passwordInput = inputs[1];
const errorMsg = wrapper.querySelector('.error-message-login')
const loginButton = wrapper.querySelector('.ws-login-button');

console.log('state: ', state);
loginButton.addEventListener('click', async () => {
  await loginUser(usernameInput.value, passwordInput.value, errorMsg);
});