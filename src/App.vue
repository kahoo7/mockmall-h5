<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <self-tabbar />
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

@import "assets/style/base.css"

</style>
