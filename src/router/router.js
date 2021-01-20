export default [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/Index.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart/Index.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine/Index.vue'),
    meta: {
      title: '我的'
    }
  }
]
