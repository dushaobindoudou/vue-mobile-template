import Vue from 'vue';
import Vuex from 'vuex';

import module from './module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {
      orderStatus: {
        isEditOrder: false,
        customerId: '',
        orderId: '',
        backBaseId: '',
        backRelativeId: '',
        backImageID: '',
        orderData: {},
      },
    }
  },
  actions: {
    update({ commit }, payload) {
      console.log('当前state信息：', payload)
      commit('update', payload)
    },
  },
  mutations: {
    updateOrderStatus(state, payload) {
      console.log('当前payload信息：', payload)
      console.log('当前state信息：', state)
      state.orderStatus = { ...state.orderStatus, ...payload }
    },
  },
  modules: {
    ...module,
  },
});
