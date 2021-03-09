<template>
  <div class="item_container">
    <van-tag
      round
      class="history_item"
      size="large"
      color="#ababab"
      text-color="#fdfdfd"
      @click="onClick"
    >{{ name }}
    </van-tag>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      // console.log(this.name)
      this.$emit('itemclick', this.name)
    }
  }
}
</script>

<style lang="less" scoped>
.item_container {
  display: inline-block;
  margin-top: .625rem;
  margin-bottom: .625rem;
  margin-left: .625rem;
  .history_item {
    margin-left: .3125rem;
    margin-right: .3125rem;
  }
}
</style>
