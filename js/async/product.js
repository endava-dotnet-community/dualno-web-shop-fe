import { 
  baseUrl,
  allProductsUrl,
  proxyServer,
  allCategoriesUrl,
  proxyAllProductsUrl,
} from './urls.js'
import { actions} from './state.js';

export async function getAllProducts(proxy = false) {
  const url = proxy ? proxyServer + proxyAllProductsUrl : baseUrl + allProductsUrl;
  try {
    await fetch(url)
    .then(response => response.json())
    .then(json => actions.updateProducts(json));
    } catch (error) {
    console.error(error);
  }
};

export async function getAllCategories(proxy = false) {
  const url = proxy ? proxyServer + '/api' : baseUrl + allCategoriesUrl;
  try {
    await fetch(url)
    .then(response => response.json())
    .then(json => actions.updateCategories(json));
    } catch (error) {
    console.error(error);
    // !: Raskaciti kada se update-uje verzija backend-a
    actions.updateCategories([{
      id: 0,
      name: 'bezalkoholna pica',
    }, {
      id: 1,
      name: 'slatkisi',
    }])
  }
};
