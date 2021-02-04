<template>
  <div class="search_container">
    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >

      <van-row>
        <van-col :span="12" :offset="1">
          <div class="search_title">{{ name }}</div>
        </van-col>
      </van-row>

      <van-row class="search_bar">
        <van-col :span="24">
          <self-search />
        </van-col>
      </van-row>

    </self-scroll>
  </div>
</template>

<script>
import SelfSearch from '@/components/SelfSearch.vue'
import SelfScroll from '@/components/SelfScroll.vue'

export default {
  components: {
    SelfScroll,
    SelfSearch
  },

  data() {
    return {
      name: '选购'
    }
  },

  methods: {
    // better-scroll 部分函数
    contentScrollY(position) {
      // console.log('position: ', position)
    },
    pullUpLoadMore() {
      console.log('上拉加载更多')
    }
  }
}
</script>

<style lang="less" scoped>
.search_container {
  background: #fff;
  .content {
    .search_title {
      font-size: 1.5rem;
      padding: .625rem .625rem;
    }

  }
}
</style>
