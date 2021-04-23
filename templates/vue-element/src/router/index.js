import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
const requireModule = require.context('./modules', true, /\.js$/);
const modules = [];
requireModule.keys().forEach((key) => {
  console.log('moduleName: ', requireModule(key).default);
  modules.push(requireModule(key).default);
});
console.log(modules);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  ...modules
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
