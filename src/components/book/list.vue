<template>
  <div class="list">
    <bookItem :style="getStyle(index)" v-for="(item, index) in props.list" :key="index" :info="item"></bookItem>
  </div>

</template>
<script setup lang="ts">
import bookItem from '@/components/book/item.vue'
const props = defineProps(['list'])

const getStyle = (index: number) => {
  let style = ""
  if (index % 4 !== 0) {
    style += 'margin-left:26px;'
  }
  if (index >= 4) {
    style += 'margin-top:20px;'
  }
  return style
}
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  padding-bottom: 10px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
