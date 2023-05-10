import { baseUrl, loginUrl, proxyServer, logoutUrl } from './urls.js'
import { handleLogin, handleLogout } from '../utils.js';

export async function loginUser(username, password, errorMsg, proxy = false) {
  const url = proxy ? proxyServer + loginUrl : baseUrl + loginUrl;
  const payload = JSON.stringify({
    userNameOrEMail: username,
    password: password,
  });
  try {
    await fetch(url, {
      method: 'POST',
      body: payload,
    })
    .then(response => response.status === 200 ? handleLogin(username, errorMsg) : handleLogin(username, errorMsg)); // if it is not SCode 200 than: errorMsg.classList.add('active');
  } catch (error) {
    console.error(error);
  }
}

export async function logoutUser(proxy = false) {
  const url = proxy ? proxyServer + logoutUrl : baseUrl + logoutUrl;
  try {
    fetch(url).then(response => response.status === 200 ? handleLogout() : alert('Internal server error'));
  } catch (error) {
    console.error(error);
  }
}
