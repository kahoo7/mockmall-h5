<template>
  <div>
    <van-row>
      <van-col :span="12" :offset="1">
        <div class="search_title">
          <div class="top">{{ topTitle }}</div>
          <div class="bottom">{{ bottomTitle }}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      topTitle: 'Discover',
      bottomTitle: 'Commodity'
    }
  }
}
</script>

<style lang="less" scoped>
.search_title {
  font-size: 2rem;
  padding: 2rem .8rem;
  color: var(--color-high-text);
  .top {
    font-size: 1.5rem;
  }
}
</style>
