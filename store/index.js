import axios from "axios";
import data from "@/static/storedata.json";

export const state = () => ({
  storedata: data,
  cart: [],
  cartUiStatus: "idle",
  quantity: 1
});
// console.log(data)

export const getters = {
  cartCount: state => {
      // Todo: Count no of items here
    //   return state.cart.length;
  }
};

export const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  clearCart: state => {
    //this clears the cart
    state.cart = [];
    state.cartUIStatus = "idle";
  },
  addToCart: state => {
    state.cart++;
  }
};
