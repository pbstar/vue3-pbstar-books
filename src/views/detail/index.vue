<template>
  <div class="page w1200">
    <div class="top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/all' }">全部课程</el-breadcrumb-item>
        <el-breadcrumb-item v-if="info && info.type" :to="{
          path: '/list', query: { type: info.type }
        }">{{ info.type }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="info && info.title">{{ info.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mid">
      <div class="mleft">
        <el-image v-if="info && info.img" style="width: 500px; height: 500px" :src="baseUrl + info.img" fit="contain" />
      </div>
      <div class="mright">
        <h3 v-if="info && info.title">{{ info.title }}</h3>
        <div v-if="info && info.type" style="margin-top: 20px;">{{ info.type }}</div>
        <div v-if="info && info.author" style="margin-top: 20px;">{{ info.author }}</div>
        <div v-if="info && info.unit" style="margin-top: 20px;">{{ info.unit }}</div>
        <div v-if="info && info.text" style="margin-top: 20px;">{{ info.text }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getList } from '@/api/module/book'
const baseUrl = ref(import.meta.env.VITE_APP_SERVER_URL)
const route = useRoute()
let info = ref<any>(null)
if (route.query.id) {
  getList({ id: route.query.id }).then((res: any) => {
    if (res.length > 0) {
      info.value = res[0]
    }
  })
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;

  .top {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .mid {
    display: flex;

    .mright {
      flex: 1;
      padding-left: 30px;

      h3 {
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
}
</style>
