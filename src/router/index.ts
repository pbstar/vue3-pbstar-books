import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('@/views/all/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list/index.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail/index.vue')
    }
  ]
})

export default router
