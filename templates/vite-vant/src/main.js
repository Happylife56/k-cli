import { createApp } from 'vue';
import Vant from 'vant';
import router from './router';
import store from './store';
import App from './App.vue';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';

createApp(App).use(router).use(store).use(Vant)
  .mount('#app');
