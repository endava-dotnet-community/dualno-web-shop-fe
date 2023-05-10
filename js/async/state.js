import { getAllProducts } from "./product.js";

export const state = {
  products: [],
  categories: [],
  user: {
    isUserLoged: false,
    logedUser: "",
  },
  // Async function for updating state values
};

export const actions = {
  updateStateFields: async () => {
    await getAllProducts();
  },
  updateLoginState: (user) => {
    state.isUserLoged = true;
    state.logedUser = user;
  },
  updateProducts: (products) => {
    console.log('Step 6 - Provided products will be in state: ', products);
    console.log('here I AM', state);
    state.products = products;
  }
};