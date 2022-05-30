import * as Pinia from 'pinia';

import persistedstate from 'pinia-persistedstate';

const pinia = Pinia.createPinia();

pinia.use(
  persistedstate({
    storage: {
      getItem: (key) => uni.getStorageSync(key),
      setItem: (key, value) => uni.setStorageSync(key, value),
      removeItem: (key) => uni.removeStorageSync(key),
    },
  }),
);

export default pinia;
