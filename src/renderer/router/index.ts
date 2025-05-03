import { createRouter, createWebHashHistory, type RouterOptions } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./../views/pages/index.vue'),
      meta: {
        title: 'Welcome'
      }
    },
    {
      path: '/settings',
      component: () => import('./../views/layouts/settings.vue'),
      children: [
        {
          path: '/',
          name: 'settings.index',
          component: () => import('./../views/pages/settings/index.vue'),
          meta: {
            title: 'Settings'
          }
        },
        {
          path: '/about',
          name: 'settings.about',
          component: () => import('./../views/pages/settings/about.vue'),
          meta: {
            title: 'About'
          }
        }
      ]
    }
  ]
});

router.afterEach((to, from, failure) => {
  const { title } = to.meta;

  if (title === document.title) return;

  document.title = title;
});

export default router;
