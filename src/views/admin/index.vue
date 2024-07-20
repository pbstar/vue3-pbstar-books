<template>
  <div class="page">
    <div class="left" :style="!collapsed?'width:200px':''">
      <div class="ltop">
        <h3 v-show="collapsed" class="logo">图书网</h3>
        <h3 v-show="!collapsed" class="logo">{{ title }}</h3>
      </div>
      <el-menu
        default-active="1"
        :collapse="collapsed"
        :collapse-transition="false"
      >
        <el-menu-item index="1">
          <el-icon><setting /></el-icon>
          <span>图书管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <div class="r_top">
        <div class="r_t_left">
          <el-button link @click="changeCollapsed">
            <el-icon v-show="collapsed" size="18"><Expand /></el-icon>
            <el-icon v-show="!collapsed" size="18"><Fold /></el-icon>
          </el-button>
          <span class="pageName">{{ pageName }}</span>
        </div>
        <div class="r_t_right">
          <el-dropdown placement="bottom" trigger="click">
            <el-button link>
              <el-icon size="18px"><UserFilled /></el-icon>
              <span>{{ username }}</span>
              <el-icon style="margin-left: 5px"><ArrowDownBold /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="clickHandler"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="r_bottom">
        <div class="r_b_box">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { RouterView, useRouter } from "vue-router";
const router = useRouter();
let title = ref(import.meta.env.VITE_APP_WEB_NAME + "后台管理系统");
const username = ref("");
const pageName = ref("");
const collapsed = ref(false);
watch(
  () => router.currentRoute.value,
  (newValue, oldValue) => {
    pageName.value = newValue.meta.title;
  },
  { immediate: true }
);
const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};

onMounted(() => {
  username.value = localStorage.getItem("username");
});
const clickHandler = () => {
  localStorage.clear();
  router.push({ path: "/login" });
};
</script>
<style scoped lang="scss">
.page {
  height: 100vh;
  width: 100%;
  display: flex;

  .left {
    .ltop {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #e8e8e8;
    }
    .logo {
      margin-left: 0;
      text-align: center;
      color: #409eff;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
    .el-menu {
      border-right: none;
    }
    .el-menu-item {
      height: 46px;
      line-height: 46px;
    }
    .el-menu-item.is-active {
      background-color: #ecf5ff;
    }
  }

  .right {
    flex: 1;
    background-color: #f6f6f6;

    .r_top {
      height: 56px;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      padding: 0 20px;
      justify-content: space-between;

      .r_t_left {
        display: flex;
        align-items: center;

        .pageName {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }

    .r_bottom {
      height: calc(100vh - 56px);
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      overflow-y: auto;

      .r_b_box {
        width: calc(100% - 20px);
        margin: 10px;
        background-color: #fff;
      }
    }
  }
}
</style>
