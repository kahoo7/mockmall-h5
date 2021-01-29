<template>
  <div class="home_container">

    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >

      <van-row style="background: #fff;">
        <van-col :span="12" :offset="1">
          <div class="home_date">{{ name }} {{ date }}</div>
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
      <van-row class="showbox">
        <van-col :span="24">
          <self-card :title="me" :content="content" :button-text="buttonText" />
        </van-col>
      </van-row>
    </self-scroll>
  </div>
</template>

<script>
// 1.公共组件导入
import SelfCard from '@/components/SelfCard.vue'
import SelfScroll from '@/components/SelfScroll.vue'
// 2.子组件导入
// 3.功能函数导入
import { formatDate } from '@/util/index.js'
import { exRequest } from '@/api/Home'
// 4.本组件对象
export default {
  components: {
    SelfCard,
    SelfScroll
  },
  data() {
    return {
      name: 'Today',
      date: formatDate(),
      me: '间 或 来 袭',
      content: '超人气蝴蝶结专场开启本周贱货即可呈现',
      buttonText: '排队抢购'
    }
  },
  created() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      console.log('created')
      exRequest().then((res) => {
        console.log(res)
      })
    },
    contentScrollY(position) {
      console.log('position: ', position)
    },
    pullUpLoadMore() {
      console.log('上拉加载更多')
    }
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
    bottom: 4.375rem;
    left: 0;
    right: 0;
    overflow: hidden;
    .home_date {
      font-family: 'PingFangSC';
      font-size: 1rem;
      padding: .625rem .625rem;
    }
    .showbox {
      margin-top: 0;
      margin-bottom: 3.125rem;
    }
  }

}
</style>
