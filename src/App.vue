<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <!-- 底部tabbar -->
    <self-tabbar class="fixed" />
  </div>
</template>

<script>
import SelfTabbar from '_c/selfTabbar'

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
