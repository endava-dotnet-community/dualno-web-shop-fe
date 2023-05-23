import { actions } from "./async/state.js";

export const handleLogin = (username, errorMsg) => {
  actions.updateLoginState(username);
  localStorage.setItem('loggedUser', username);
  // TODO: replace hompepage with AdminHompage
  username === 'admin' ? window.location.replace('/page/homePageUser.html') : window.location.replace('/page/homePageUser.html');
  
}

export const handleLogout = () => {
  actions.updateLogoutState();
  window.location.replace('/index.html');
}
