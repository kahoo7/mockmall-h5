<template>
  <div class="wrapper">
    <!-- image-wrapper -->
    <div class="image-wrapper">
      <van-image
        :width="width"
        :height="height"
        fit="cover"
        :src="imgUrl"
        @click="handleClick"
      >
        <!-- 自定义 loading -->
        <!-- <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template> -->
        <!-- 自定义 error -->
        <template v-slot:error>加载失败</template>
      </van-image>
    </div>
    <!-- category-title -->
    <div class="cate-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '100'
    },
    title: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
