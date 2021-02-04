<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
    <!-- 底部tabbar -->
    <self-tabbar class="fixed" />
  </div>
</template>

<script>
import SelfTabbar from '@/components/SelfTabbar'

export default {
  name: 'App',
  components: {
    SelfTabbar
  }
}
</script>

<style lang="scss">

@import "assets/style/base.css";
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
