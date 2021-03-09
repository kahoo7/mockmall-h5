<template>
  <div>
    <van-row class="search_history" type="flex" justify="space-between">
      <div>历史</div>
      <div @click="onClear">清空记录 <van-icon name="delete" color="var(--color-high-text)" size="1.0rem" /></div>
    </van-row>
    <van-row>
      <van-col :span="24">
        <history-item
          v-for="(item, index) in historyList"
          :key="index"
          :name="item"
          @itemclick="itemClick"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import HistoryItem from './HistoryItem.vue'
export default {
  components: {
    HistoryItem
  },
  props: {
    historyList: {
      type: Array,
      default: _ => []
    }
  },
  methods: {
    onClear() {
      console.log(`request(post): clear history list by userid.`)
    },
    itemClick(name) {
      console.log(`itemClick: ${name}`)
    }
  }
}
</script>

<style scoped>
.search_history {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
</style>
