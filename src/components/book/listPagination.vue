<template>
  <div class="box">
    <el-pagination background layout="prev, pager, next" :total="props.total" :page-size="props.size"
      @current-change="change" />
  </div>

</template>
<script setup lang="ts">
const props = defineProps(['total', 'size'])
const emit = defineEmits(['change'])
const change = (page: number) => {
  emit('change', page)
}
</script>
<style lang="scss" scoped>
.box {
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
