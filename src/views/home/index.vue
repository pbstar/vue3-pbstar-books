<template>
  <div class="page">
    <el-carousel height="300px" arrow="always" motion-blur trigger="click">
      <el-carousel-item v-for="(item, index) in banner" :key="index" style="background-color: #eee;">
        <el-image style="width: 100%;height: 100%;" :src="baseUrl + item.img" fit="cover" />
      </el-carousel-item>
    </el-carousel>
    <div class="top1 w1200">
      <BookListTop name="热门推荐" :moreClick="moreClick"></BookListTop>
      <BookList :list="hot"></BookList>
      <div v-for="(item, index) in userBook.types" :key="index">
        <BookListTop :name="item" :moreClick="moreClick"></BookListTop>
        <BookList :list="getBookList(item, index)"></BookList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getBanner, getHot, getList } from '@/api/module/book'
import { ref } from 'vue'
import BookListTop from '@/components/book/listTop.vue'
import BookList from '@/components/book/list.vue'
import { useBookStore } from '@/stores/book'
import { useRouter } from 'vue-router'
const router = useRouter()

const userBook = useBookStore()

const baseUrl = ref(import.meta.env.VITE_APP_SERVER_URL)
let banner = ref(<any>[])
getBanner().then((res) => {
  banner.value = res
})
let hot = ref(<any>[])
getHot().then((res: any) => {
  hot.value = res.splice(0, 4)
})
let list1 = ref(<any>[])
let list2 = ref(<any>[])
let list3 = ref(<any>[])
let list4 = ref(<any>[])
const getBookList = (e: any, index: number) => {
  if (index == 0) {
    return list1.value
  } else if (index == 1) {
    return list2.value
  } else if (index == 2) {
    return list3.value
  } else {
    return list4.value
  }
}
for (let i = 0; i < userBook.types.length; i++) {
  getList({
    type: userBook.types[i]
  }).then((res: any) => {
    if (i == 0) {
      list1.value = res.splice(0, 4)
    } else if (i == 1) {
      list2.value = res.splice(0, 4)
    } else if (i == 2) {
      list3.value = res.splice(0, 4)
    } else {
      list4.value = res.splice(0, 4)
    }
  })
}
const moreClick = (e: any) => {
  router.push({
    path: '/list',
    query: {
      type: e
    }
  })
}
</script>
<style lang="scss" scoped>
.page {
  min-height: var(--page-height);

  ::v-deep(.el-carousel__arrow--left) {
    left: 50%;
    margin-left: -620px;
  }

  ::v-deep(.el-carousel__arrow--right) {
    right: 50%;
    margin-right: -620px;
  }

  .top1 {
    padding-bottom: 50px;
  }
}
</style>
