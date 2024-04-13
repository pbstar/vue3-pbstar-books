<template>
  <div class="box">
    <h3>{{ props.name }}</h3>
    <el-link :icon="InfoFilled" @click="props.moreClick(props.name)">更多</el-link>
  </div>

</template>
<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
const props = defineProps(['name', 'moreClick'])
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;

  h3 {
    font-weight: 800;
    font-size: 20px;
  }
}
</style>
