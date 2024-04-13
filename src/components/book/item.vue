<template>
  <div class="box" @click="toDetail">
    <el-image style="width: 280px; height: 160px" :src="baseUrl + props.info.img" fit="contain" />
    <div class="title">{{ props.info.title }}</div>
    <div class="bbot">
      <div class="type">{{ props.info.type }}</div>
      <div class="author">{{ props.info.author }}</div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps(['info'])
const baseUrl = ref(import.meta.env.VITE_APP_SERVER_URL)
const toDetail = () => {
  router.push({
    path: '/detail',
    query: {
      id: props.info.id // 传递参数
    }
  })
}
</script>
<style lang="scss" scoped>
.box {
  width: 280px;
  background: #fff;
  box-shadow: 0 3px 15px 0 rgba(100, 100, 100, 0.06);
  padding: 10px 0 5px;
  cursor: pointer;

  .title {
    margin: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  .bbot {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: #999;
    align-items: center;

    .type {
      border: 1px solid #999;
      border-radius: 2px;
      padding: 3px 5px;
      font-size: 13px;
      line-height: 13px;
    }
  }
}
</style>
