import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/util/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // 设置背景色
  document.querySelector('body').setAttribute('style', 'background: #F7F8FA')
  next()
})

// 导航被确认之前, 所有导航钩子都结束
router.beforeResolve((to, from, next) => {
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // loading 去loading样式
})

export default router
