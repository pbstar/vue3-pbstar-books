<template>
  <div class="box">
    <h3>{{ props.name }}</h3>
    <el-image style="width: 100%;height: 100%;" :src="banner" fit="cover" />
  </div>

</template>
<script setup lang="ts">
const props = defineProps(['name'])
import banner from '@/assets/imgs/banner.jpg'

</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 220px;
  position: relative;
 min-width:1200px;

  h3 {
    font-weight: 800;
    font-size: 30px;
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -600px;
    color: #fff;
    z-index: 10;
    border-bottom: 3px solid #fff;
    padding-bottom: 10px;
  }
}
</style>
