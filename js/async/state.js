import { getAllCategories, getAllProducts } from "./product.js";

export const state = {
  products: [],
  categories: [],
  user: {
    isUserLoged: false,
    logedUser: "",
  },
};

export const initState = () => {
  if(localStorage.getItem('loggedUser')) {
    state.user.isUserLoged = true,
    state.user.logedUser = localStorage.getItem('loggedUser');
  }
};

export const actions = {
  updateStateFields: async () => {
    await getAllProducts();
    await getAllCategories();
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
  },
  updateCategories: (categories) => {
    state.categories = categories;
  },
};