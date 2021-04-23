import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const routesModules = import.meta.globEager('../views/**/store/*.js');
const modules = [];
Object.keys(routesModules).forEach((key) => {
  modules.push(routesModules[key]);
});

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: { },
  actions: { },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 修改存储的状态
    }),
  ], // 状态持久化
});

export default store;
