import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const requireModule = require.context('./modules', true, /\.js$/);
const module = [];
requireModule.keys().forEach((key) => {
  const moduleName = key.replace(/(\.\/|.*\/|\.js)/g, '');
  module.push(...requireModule(key)[`${moduleName}Router`]);
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...module,
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/redirect',
    component: Home,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/views/Redirect.vue'),
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
