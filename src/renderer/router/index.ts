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
      component: () => import('./../views/layouts/settings.vue'),
      children: [
        {
          path: '/',
          name: 'settings',
          component: () => import('./../views/pages/settings/index.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./../views/pages/settings/about.vue')
        }
      ]
    }
  ]
});

export default router;
