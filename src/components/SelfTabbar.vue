<template>
  <div class="container">
    <van-tabbar v-model="active" route @change="onChange">
      <van-tabbar-item v-for="(item, index) in list" :key="index" replace :to="item.to" :name="item.name">
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
      active: 'home',
      list: [
        {
          name: 'home',
          to: '/home',
          icon: {
            active: require('../assets/image/selftabbar/home_active.png'),
            inactive: require('../assets/image/selftabbar/home_inactive.png')
          }
        },
        {
          name: 'category',
          to: '/category',
          icon: {
            active: require('../assets/image/selftabbar/cate_active.png'),
            inactive: require('../assets/image/selftabbar/cate_inactive.png')
          }
        },
        {
          name: 'search',
          to: '/search',
          icon: {
            active: require('../assets/image/selftabbar/search_active.png'),
            inactive: require('../assets/image/selftabbar/search_inactive.png')
          }
        },
        {
          name: 'cart',
          to: '/cart',
          icon: {
            active: require('../assets/image/selftabbar/cart_active.png'),
            inactive: require('../assets/image/selftabbar/cart_inactive.png')
          }
        },
        {
          name: 'mine',
          to: '/mine',
          icon: {
            active: require('../assets/image/selftabbar/mine_active.png'),
            inactive: require('../assets/image/selftabbar/mine_inactive.png')
          }
        }
      ]
    }
  },
  methods: {
    onChange() {
      // console.log(this.active)
    }
  }
}
</script>

<style scoped>
.van-tabbar-item__icon img {
  height: 1.5625rem;
}
</style>
