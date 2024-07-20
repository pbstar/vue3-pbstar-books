<template>
  <header>
    <div class="page w1200">
      <div class="left">
        <img src="@/assets/imgs/图书.png" alt="" />
        <span>{{ webName }}</span>
      </div>
      <div class="right">
        <el-menu
          :default-active="activeIndex"
          class="menu"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">全部图书</el-menu-item>
          <el-sub-menu index="3">
            <template #title>图书分类</template>
            <el-menu-item
              v-for="(item, index) in userBook.types"
              :key="index"
              :index="item"
              >{{ item }}</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="4">关于</el-menu-item>
          <el-menu-item index="5">登录</el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useBookStore } from "@/stores/book";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const userBook = useBookStore();
const webName = ref(import.meta.env.VITE_APP_WEB_NAME);

let activeIndex = ref("1");
if (route.path === "/") {
  activeIndex.value = "1";
} else if (route.path === "/all" || route.path === "/detail") {
  activeIndex.value = "2";
} else if (route.path === "/about") {
  activeIndex.value = "4";
} else if (route.path === "/list") {
  activeIndex.value = route.query.type as string;
} else if (route.path === "/login") {
  activeIndex.value = "5";
}

const handleSelect = (key: string, keyPath: string[]) => {
  if (key === "1") {
    router.push("/");
  } else if (key === "2") {
    router.push("/all");
  } else if (key === "4") {
    router.push("/about");
  } else if (key === "5") {
    router.push("/login");
  } else {
    router.push({
      path: "/list",
      query: { type: key },
    });
  }
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.13);
  height: 80px;
}

.page {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    span {
      font-size: 24px;
      font-weight: 600;
      color: #333;
    }
  }

  .right {
    height: 100%;

    .menu {
      height: 100%;
      border-bottom: none;
    }
  }
}
</style>
