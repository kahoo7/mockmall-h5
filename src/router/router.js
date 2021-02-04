export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Index.vue')
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
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Index.vue'),
    meta: {
      title: '搜索'
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
