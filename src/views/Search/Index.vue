<template>
  <div class="search_container">
    <!-- 滚动组件 -->
    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >

      <!-- 页面标题 -->
      <search-title />

      <!-- 搜索栏 -->
      <van-row class="search_bar">
        <van-col :span="24">
          <self-search />
        </van-col>
      </van-row>

      <!-- 搜索历史 -->
      <search-history :history-list="historyList" />

      <!-- 热搜榜 -->
      <search-hotspot />

      <!-- 热门分类 -->
      <van-row class="search_hotCategory">
        <van-col :span="24">
          <div>热门分类</div>
        </van-col>
        <van-col :span="12">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </van-col>
        <van-col :span="12">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </van-col>
      </van-row>
    </self-scroll>
  </div>
</template>

<script>
import SearchTitle from './searchTitle'
import SearchHistory from './searchHistory'
import SearchHotspot from './searchHotspot'
import SelfSearch from '_c/selfSearch'
import SelfScroll from '_c/selfScroll'

// 从 util 导入辅助函数
import { contentScrollY, pullUpLoadMore } from '@/util/bscroll'

export default {
  components: {
    SelfScroll,
    SelfSearch,
    SearchTitle,
    SearchHistory,
    SearchHotspot
  },

  data() {
    return {
      name: '选购',
      historyList: ['碗', 'die', 'apple', 'banana'],
      hotSpotList: [],
      hotCategoryList: [],
      contentScrollY: contentScrollY,
      pullUpLoadMore: pullUpLoadMore
    }
  },

  created() {
    this.onLoad()
  },

  methods: {
    onLoad() {
      console.log(`request(get): get search page.`)
      this.getHistoryList()
      this.getHotSpotList()
    },
    getHistoryList() {
      console.log(`request(get): get history list by userid.`)
    },
    getHotSpotList() {
      console.log(`request(get): get HotSpot list.`)
    }
    // // better-scroll 部分函数
    // contentScrollY(position) {
    //   // console.log('position: ', position)
    // },
    // pullUpLoadMore() {
    //   console.log('上拉加载更多')
    // }
  }
}
</script>

<style lang="less" scoped>
.search_container {
  background: #fff;
  padding-left: .3125rem;
  padding-right: .3125rem;
  box-sizing: border-box;
  .content {
    height: calc(100vh - 3.125rem);
    overflow: hidden;
    .search_title {
      font-size: 1.5rem;
      padding: .625rem .625rem;
    }
    .search_bar {
      margin-bottom: .625rem;
    }
    .search_history {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
    }

    .search_hotCategory {
      margin-top: 1.875rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
}
</style>
