import { baseUrl, loginUrl, proxyServer } from './urls.js'

export async function loginUser(username, password, proxy = false) {
  const url = proxy ? proxyServer + loginUrl : baseUrl + loginUrl;
  console.log('url: ', url);
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userNameOrEMail: username,
        password: password,
      }),
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
