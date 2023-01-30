import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

/**
 * 读取./modules下的所有js文件并注册模块
 */
const requireModule = require.context('../views', true, /\/store\/.*\.js$/);
const module = {};
requireModule.keys().forEach((key) => {
  const fileName = key.split('/')[1];
  const moduleLastName = key.replace(/(\.\/|.*\/|\.js)/g, '');
  const moduleName = moduleLastName === 'index' ? fileName : moduleLastName;
  module[moduleName] = {
    ...requireModule(key).default
  };
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...module,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
});
