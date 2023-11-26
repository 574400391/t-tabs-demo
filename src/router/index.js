import { createRouter, createWebHashHistory } from 'vue-router'

const defaultRouterList = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../pages/details.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouterList,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
