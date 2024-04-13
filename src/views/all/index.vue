<template>
  <div class="page">
    <bookListBanner name="全部图书" />
    <div class="list w1200">
      <bookList :list="list" />
      <bookListPagination :total="total" :size="pageSize" @change="getBookList" />
    </div>

  </div>
</template>
<script setup lang="ts">
import bookListBanner from '@/components/book/listBanner.vue'
import bookList from '@/components/book/list.vue'
import bookListPagination from '@/components/book/listPagination.vue'
import { ref, onMounted } from 'vue'
import { getList } from '@/api/module/book'
const list = ref<any>([])
const page = ref(1)
const pageSize = ref(8)
const total = ref(0)

onMounted(() => {
  getBookList(1)
})
const getBookList = (e: any) => {
  page.value = e
  getList({
    _page: page.value,
    _per_page: pageSize.value,
  }).then((res) => {
    total.value = res.items
    list.value = res.data
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
