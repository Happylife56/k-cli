const SET_TOKEN_DATA = 'setTokenData'; // 设置token

const state = {
  tokenTest: 'tokenTest' // token
};

// mutations
const mutations = {
  // 设置token
  [SET_TOKEN_DATA](state, data) {
    state.token2 = data;
  }
};

// getters
const getters = {
  getToken(state) {
    return state.tokenTest;
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
