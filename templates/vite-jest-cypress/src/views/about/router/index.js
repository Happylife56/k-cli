export default [
  {
    path: '/about',
    name: 'About',
    component: () => import('../index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../test.vue'),
  },
];
