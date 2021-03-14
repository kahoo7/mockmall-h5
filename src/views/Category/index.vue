<template>
  <div class="categroy-wrapper">
    <self-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScrollY"
      @pullingUp="pullUpLoadMore"
    >
      <!-- category: header -->
      <category-title />
      <!-- category: content -->
      <category-card
        v-for="(item, index) in cateList"
        :key="index"
        :width="option.width"
        :height="option.height"
        :title="item.title"
        :img-url="item.imgUrl"
      />
    </self-scroll>
  </div>
</template>

<script>
import Mock from 'mockjs'
const Random = Mock.Random
// 从 src/components 导入公共组件
import SelfScroll from '_c/selfScroll'

// 从 ./component 导入子组件
import CategoryTitle from './component/categoryTitle'
import CategoryCard from './component/categoryCard'

// 从 util 导入辅助函数
import { contentScrollY, pullUpLoadMore } from '@/util/bscroll'

export default {
  components: {
    SelfScroll,
    CategoryTitle,
    CategoryCard
  },
  data() {
    return {
      name: 'category',
      cateList: [{
        title: 'Woman',
        imgUrl: Random.image('200x500', '#50B347', '#FFF', 'Mock.js')
      }, {
        title: 'Man',
        imgUrl: Random.image('200x500', '#50B347', '#FFF', 'Mock.js')
      }, {
        title: 'Girl',
        imgUrl: Random.image('200x500', '#50B347', '#FFF', 'Mock.js')
      }, {
        title: 'Boy',
        imgUrl: Random.image('200x500', '#50B347', '#FFF', 'Mock.js')
      }
      ],
      option: {
        width: '',
        height: ''
      },
      contentScrollY: contentScrollY,
      pullUpLoadMore: pullUpLoadMore
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.scroll.refresh()
    }, 100)
  }
}
</script>

<style lang="less" scoped>
.categroy-wrapper {
  background: #fff;
  padding-left: .3125rem;
  padding-right: .3125rem;
  box-sizing: border-box;
  .content {
    height: calc(100vh - 3.125rem);
    overflow: hidden;
  }
}
</style>
