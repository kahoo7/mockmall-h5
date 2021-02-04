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
      <van-row class="mine_avatar">
        <van-col class="avatar">
          <div>{{ name }}</div>
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
