import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from "element-plus";
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/all',
      name: 'all',
      component: () => import('@/views/all/index.vue'),
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list/index.vue'),
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail/index.vue'),
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        isHeaderAndFooter: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/books',
      component: () => import('@/views/admin/index.vue'),
      children: [
        {
          path: 'books',
          name: 'adminBooks',
          component: () => import('@/views/admin/books/index.vue'),
          meta: {
            isLogin: true,
            title: "图书管理"
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta?.isLogin) {
    let userId = localStorage.getItem("userId")
    if (!userId) {
      ElMessage.error("请先登录")
      next({
        name: "login"
      })
      return
    }
  }
  next();
})
export default router
