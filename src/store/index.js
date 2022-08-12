import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      guest: true,
      username: "",
      email: "",
      verified: false,
      cart: []
    },
    api: "http://localhost:4000",
    razorpay_api_key: "rzp_test_bS3McLh7PnpKwQ" //this is not secret, it gives the user access only to send money to our account
  },
  mutations: {
    updateUser(state, usr) {
      if (!usr) {
        return state.user = {guest: true, username: "", email: "", verified: false, cart: []}
      }
      state.user = {
        guest: false,
        verified: usr.verified,
        username: usr.username,
        email: usr.email,
        cart: usr.cart
      };
    },
  },
  actions: {},
  modules: {},
});
