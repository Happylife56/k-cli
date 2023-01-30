export default [
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */'../index.vue'),
  }
];
