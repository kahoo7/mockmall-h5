<template>
  <div class="home_container">
    <!-- better-scroll组件 -->
    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >
      <!-- home: header -->
      <van-row class="home_date" style="background: #fff">
        <van-col class="title" :span="6" :offset="1">
          <div>{{ name }}</div>
        </van-col>
        <van-col class="date" :span="11">
          <div>{{ date }}</div>
        </van-col>
      </van-row>

      <!-- home： 海报卡片 -->
      <van-row v-for="(item,index) in list" :key="index" class="showbox">
        <van-col :span="24">
          <home-card
            :title="item.title ? item.title : title"
            :content="item.content ? item.content : content"
            :button-text="item.btnText ? item.btnText : btnText"
            :src="item.imgUrl ? item.imgUrl : imgUrl"
            @click.native="handleClick(index)"
          />
        </van-col>
      </van-row>

    </self-scroll>
  </div>
</template>

<script>
import SelfScroll from '_c/selfScroll'
import HomeCard from './component/homeCard'

import { getList } from '@/api/home'

import { formatDate } from '@/util/index.js'

import { contentScrollY, pullUpLoadMore } from '@/util/bscroll.js'

export default {
  components: {
    HomeCard,
    SelfScroll
  },
  data() {
    return {
      name: 'Today',
      date: formatDate(),
      title: '',
      content: '',
      btnText: '',
      imgUrl: '',
      list: [],
      contentScrollY: contentScrollY,
      pullUpLoadMore: pullUpLoadMore
    }
  },
  created() {
    this.onLoad()
  },
  mounted() {
    getList()
      .then((res) => {
        console.log('home: getList')
        this.list = res.data.data
      })
      .then(() => this.$refs.scroll.refresh())
      .catch((error) => console.log(error.message))
  },
  methods: {
    // 页面数据请求函数
    onLoad() {
      console.log('home: onload...')
    },
    // homeCard组件 @click.native 处理函数
    // TODO: 处理点击事件
    handleClick(index) {
      console.log(index)
    }
    // // better-scroll 部分函数
    // contentScrollY(position) {
    //   // console.log('position: ', position)
    // },
    // pullUpLoadMore() {
    //   console.log('上拉加载更多')
    //   this.$refs.scroll.refresh()
    // }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  .content {
    position: absolute;
    top: 0;
    bottom: 3.125rem;
    left: 0;
    right: 0;
    overflow: hidden;
    .home_date {
      font-family: "PingFangSC";
      font-size: 1rem;
      padding: 0.625rem 0.625rem;
      .title {
        font-size: 1.5rem;
        text-align: center;
      }
      .date {
        height: 2rem;
        line-height: 2rem;
      }
    }
    .showbox {
      margin-top: 0;
      margin-bottom: 3.125rem;
    }
  }
}
</style>
