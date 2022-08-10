import { createStore } from 'vuex'

export default createStore({
  state: {
    api: `http://localhost:4000`,
    user: {
      guest: true,
      username: "",
      email: "",
    }
  },
  getters: {
  },
  mutations: {
    changeUser(state, user){
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
