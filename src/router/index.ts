/*
 * @Author: 彭璟
 * @Date: 2022-03-17 16:31:06
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 16:29:49
 * @Description: 路由
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ro from './demo'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      showTab: true,
      title: '首页'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue'),
    meta: {
      showTab: true,
      title: '我的'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list.vue')
  },
  ...ro
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(() => {
  return true
})

export default router
