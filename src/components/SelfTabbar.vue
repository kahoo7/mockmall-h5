<template>
  <div class="container">
    <van-tabbar
      v-model="active"
      active-color="#c8b4eb"
      inactive-color="#bcbcbc"
    >

      <van-tabbar-item
        replace
        to="/home"
      >
        <span>{{ item_1 }}</span>
        <template #icon="props">
          <img :src="props.active ? icon_1.active : icon_1.inactive">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <span>{{ item_2 }}</span>
        <template #icon="props">
          <img :src="props.active ? icon_2.active : icon_2.inactive">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart">
        <span>{{ item_3 }}</span>
        <template #icon="props">
          <img :src="props.active ? icon_3.active : icon_3.inactive">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home">
        <span>{{ item_4 }}</span>
        <template #icon="props">
          <img :src="props.active ? icon_4.active : icon_4.inactive">
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

      // tab1
      item_1: '主页',
      icon_1: {
        active: require('../assets/image/selftabbar/home_active.png'),
        inactive: require('../assets/image/selftabbar/home_inactive.png')
      },
      // tab2

      item_2: '分类',
      icon_2: {
        active: require('../assets/image/selftabbar/cate_active.png'),
        inactive: require('../assets/image/selftabbar/cate_inactive.png')
      },
      // tab3

      item_3: '购物车',
      icon_3: {
        active: require('../assets/image/selftabbar/cart_active.png'),
        inactive: require('../assets/image/selftabbar/cart_inactive.png')
      },
      // tab4

      item_4: '我的',
      icon_4: {
        active: require('../assets/image/selftabbar/mine_active.png'),
        inactive: require('../assets/image/selftabbar/mine_inactive.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
