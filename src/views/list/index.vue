<template>
  <div class="page">
    <bookListBanner :name="name" />
    <div class="list w1200">
      <bookList :list="list" />
    </div>

  </div>
</template>
<script setup lang="ts">
import bookListBanner from '@/components/book/listBanner.vue'
import bookList from '@/components/book/list.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { getHot, getList } from '@/api/module/book'
const route = useRoute()
const name = ref(route.query.type)
const list = ref<any>([])
if (name.value === '热门推荐') {
  getHot().then((res) => {
    list.value = res
  })
} else {
  getList({
    type: name.value
  }).then((res) => {
    list.value = res
  })
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;

  .list {
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
</style>
