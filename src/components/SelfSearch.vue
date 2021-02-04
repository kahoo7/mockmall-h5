<template>
  <div class="search_container">
    <van-search
      v-model="value"
      show-action
      clearable
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template slot="action">
        <div class="search_button" @click="onSearch">
          搜索
        </div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'search',
      value: ''
    }
  },
  methods: {
    onSearch() {
      console.log(`onSearch: ${this.value}`)
    }
  }
}
</script>

<style lang="less" scoped>
.search_container {
  .search_button {
    width: 3rem;
    text-align: center;
    color: var(--color-high-text)
  }
}
</style>
