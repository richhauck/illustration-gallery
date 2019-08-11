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
    isNavOpen: state => state.isNavOpen
  },
  // manipulate state
  mutations: {
    [SET_NAV_OPEN](state, isOpen) {
      if (isOpen === undefined) {
        state.isNavOpen = !state.isNavOpen;
      } else {
        state.isNavOpen = isOpen;
      }
    }
  },
  // exposed methods that can call mutations
  actions: {
    setNavOpen (store, isOpen) {
      store.commit('setNavOpen', isOpen);
    }
  },
  modules: {
    projects
  }
});
