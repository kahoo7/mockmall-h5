<template>
  <div class="home_container">
    <van-row style="background: #fff;">
      <van-col :span="12" :offset="1">
        <div class="home_date">{{ date }}</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col :span="24">
        <self-card :title="me" :content="content" :button-text="buttonText" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
// 1.公共组件导入
import SelfCard from '@/components/SelfCard.vue'
// 2.子组件导入
// 3.功能函数导入
import { formatDate } from '@/util/index.js'
// 4.本组件对象
export default {
  components: {
    SelfCard
  },
  data() {
    return {
      name: 'home',
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
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  .home_date {
    font-family: 'PingFangSC';
    font-size: 1rem;
    padding: .625rem .625rem;
  }
}
</style>
