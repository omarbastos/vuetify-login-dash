import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    changeLoggedIn(state) {
      state.loggedIn = !state.loggedIn;
    }
  },
  actions: {},
  modules: {}
});
