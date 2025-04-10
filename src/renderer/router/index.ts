import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./../views/pages/index.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./../views/pages/settings.vue')
    }
  ]
});

export default router;
