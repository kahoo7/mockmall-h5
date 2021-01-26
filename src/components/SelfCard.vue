<template>
  <div class="container">
    <van-row>
      <van-col :span="24">
        <van-image
          class="selfCard_image"
          width="100%"
          height="100%"
          fit="contain"
          :src="src"
        />
      </van-col>
    </van-row>
    <div class="selfCard_footer">
      <div class="selfCard_footer_title">
        <span>{{ title }}</span>
      </div>
      <div class="selfCard_footer_content">
        <span>{{ content }}</span>
      </div>
      <div class="selfCard_footer_button">
        <span>{{ buttonText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 1.公共组件导入
// 2.子组件导入
// 3.功能函数导入
// 4.本组件对象
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'button'
    },
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name: 'SelfCard'
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    position: relative;
    background-color: rgb(200, 180, 235);
    width: 100%;
    height: 31.25rem;

    .selfCard_image {
      position: relative;
      z-index: -999;
    }

    .selfCard_footer {
      position: absolute;
      left: 1.875rem;
      bottom: 1.875rem;
      z-index: 1000;

      .selfCard_footer_title {
        padding: .625rem;
        background-color: transparent;
        color: #fff;
      }

      .selfCard_footer_content {
        padding: .625rem;
        font-size: 30px;
        background-color: transparent;
        color: #fff;
      }

      .selfCard_footer_button {
        font-size: .625rem;
        width: 6.25rem;
        height: 1.875rem;
        margin: .625rem 1.25rem;
        background-color: rgba(255,255,255, .9) !important;
        border-radius: 2.1875rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
