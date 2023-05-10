import { logoutUser } from "/js/async/users.js";

const logoutBtn = document.querySelector('.logout');

logoutBtn.addEventListener('click', async () => {
  await logoutUser();
});