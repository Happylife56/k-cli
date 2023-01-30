import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
const requireModule = require.context('../views', true, /\/router\/.*\.js$/);
const modules = [];
requireModule.keys().forEach((key) => {
  const moduleName = requireModule(key).default;
  const isArray = Array.isArray(moduleName);
  isArray ? modules.push(...moduleName) : modules.push(moduleName);
});

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
