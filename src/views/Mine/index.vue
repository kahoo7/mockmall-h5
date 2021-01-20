<template>
  <div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
// 1.公共组件导入
// 2.子组件导入
// 3.功能函数导入
// 4.本组件对象
export default {
  data() {
    return {
      name: 'mine'
    }
  }
}
</script>

<style scoped>

</style>
