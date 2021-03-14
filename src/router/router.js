export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/index'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/index'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/index'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/index'),
    meta: {
      title: '我的'
    }
  }
]
