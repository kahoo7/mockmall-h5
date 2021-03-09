<template>
  <div class="mine_container">
    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >
      <!-- 我的：个人信息栏 -->
      <van-row class="mine_avatar">
        <van-col class="avatar">
          <div>{{ name }}</div>
        </van-col>
      </van-row>

      <!-- 我的：收藏 足迹  -->
      <van-row>
        <van-col span="12">
          <div class="collection-box">
            <span class="box-name" />
            <span class="box-number" />
            <span class="arrow-right">></span>
          </div>
        </van-col>
        <van-col span="12">
          <div class="collection-box">
            <span class="box-name" />
            <span class="box-number" />
            <span class="arrow-right">></span>
          </div>
        </van-col>
      </van-row>

      <!-- 我的：物流情况栏 -->
      <van-row>
        <van-col span="24" class="express-info">
          <div>待付款</div>
          <div>待发货</div>
          <div>待收货</div>
          <div>待评价</div>
          <div>退换/售后</div>
        </van-col>
      </van-row>
    </self-scroll>
  </div>
</template>

<script>
import SelfScroll from '@/components/SelfScroll.vue'

export default {
  components: {
    SelfScroll
  },
  data() {
    return {
      name: 'mine',
      data() {
        return {
          avatar: '',
          name: '用户'
        }
      }
    }
  },
  created() {
    this.onLoad()
  },
  methods: {
    // 页面初始化函数 onLoad
    onLoad() {
      console.log('mine')
    },
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

<style scoped>

</style>
