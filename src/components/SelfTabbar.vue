<template>
  <div class="container">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, index) in list" :key="index" replace :to="item.to">
        <template #icon="props">
          <img :src="props.active ? item.icon.active : item.icon.inactive">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      list: [
        {
          item: '主页',
          to: '/home',
          icon: {
            active: require('../assets/image/selftabbar/home_active.png'),
            inactive: require('../assets/image/selftabbar/home_inactive.png')
          }
        },
        {
          item: '分类',
          to: '/category',
          icon: {
            active: require('../assets/image/selftabbar/cate_active.png'),
            inactive: require('../assets/image/selftabbar/cate_inactive.png')
          }
        },
        {
          item: '搜索',
          to: '/search',
          icon: {
            active: require('../assets/image/selftabbar/search_active.png'),
            inactive: require('../assets/image/selftabbar/search_inactive.png')
          }
        },
        {
          item: '购物车',
          to: '/cart',
          icon: {
            active: require('../assets/image/selftabbar/cart_active.png'),
            inactive: require('../assets/image/selftabbar/cart_inactive.png')
          }
        },
        {
          item: '我的',
          to: '/mine',
          icon: {
            active: require('../assets/image/selftabbar/mine_active.png'),
            inactive: require('../assets/image/selftabbar/mine_inactive.png')
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.van-tabbar-item__icon img {
  height: 1.5625rem;
}
</style>
