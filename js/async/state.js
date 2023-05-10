import { getAllProducts } from "./product.js";

export const state = {
  products: [],
  categories: [],
  user: {
    isUserLoged: false,
    logedUser: "",
  },
};

export const actions = {
  updateStateFields: async () => {
    await getAllProducts();
  },
  updateLoginState: (user) => {
    state.user.isUserLoged = true;
    state.user.logedUser = user;
  },
  updateLogoutState: () => {
    state.user.isUserLoged = false;
    state.user.logedUser = "";
  },
  updateProducts: (products) => {
    state.products = products;
  }
};