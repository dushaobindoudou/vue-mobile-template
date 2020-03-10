import api from '@api';

export default {
  namespaced: true,
  state() {
    return {
      username: '',
      password: '',
      result: {},
    };
  },
  getters: {
    isAdmin() { 
      return false;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    login({ state }, payload) {
      return api.common.login(null, {
        username: payload.username,
        password: payload.password,
      });
    },
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username;
    },
    updatePassword(state, password) {
      state.password = password;
    },
    updateLoginInfo(state, payload) {
      if (!payload) {
        return;
      }
      state.username = payload.username;
      state.password = payload.password;
    },
  },
};
