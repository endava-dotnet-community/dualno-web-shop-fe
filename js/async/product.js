import { baseUrl, allProductsUrl, proxyServer } from './urls.js'
import { actions} from './state.js';

export async function getAllProducts(proxy = false) {
  const url = proxy ? proxyServer + '/api' : baseUrl + allProductsUrl;
  console.log(url);
  try {
    await fetch(url)
    .then(response => response.json())
    .then(json => actions.updateProducts(json));
    } catch (error) {
    console.error(error);
  }
}
