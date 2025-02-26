import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home.vue'),
  },
  {
    path: '/medical-staff',
    name: 'Members',
    component: () => import('./../views/Members.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
