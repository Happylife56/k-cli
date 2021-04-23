const SET_TOKEN_DATA = 'setTokenData'; // 设置token

const state = {
  token: '' // token
};

// mutations
const mutations = {
  // 设置token
  [SET_TOKEN_DATA](state, data) {
    state.token = data;
  }
};

// getters
const getters = {
  getToken(state) {
    return state.token;
  }
};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
