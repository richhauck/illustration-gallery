import Vue from 'vue';
import Vuex from 'vuex';
import projects from './modules/projects';
import { SET_NAV_OPEN } from '../mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false, // determines whether navigation menu is displayed
  },
  getters: {
    isNavOpen: (state) => {
      return state.isNavOpen;
    },
  },
  // manipulate state
  mutations: {
    [SET_NAV_OPEN](state) {
      state.isNavOpen = !state.isNavOpen;
    },

  },
  // exposed methods
  actions: {
    setNavOpen (store) {
      store.commit('setNavOpen');
    }
  },
  modules: {
    projects
  }
});
