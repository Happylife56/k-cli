// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routesModules = import.meta.globEager('../views/**/router/*.js');
const modules = [];
Object.keys(routesModules).forEach((key) => {
  modules.push(...routesModules[key].default);
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...modules,
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
