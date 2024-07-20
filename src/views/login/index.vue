<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <h3 class="title">登 录</h3>
      <div class="formBox">
        <form>
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
          <el-input
            type="password"
            show-password
            v-model="loginForm.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
          <el-button style="width: 100%" type="primary" @click="handleSubmit()"
            >登录</el-button
          >
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { toLogin } from "@/api/module/admin";
import { ElMessage } from "element-plus";

const router = useRouter();


onMounted(() => {});
const loginForm = ref({
  username: "admin",
  password: "123456",
});
const handleSubmit = () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    ElMessage.error("请输入用户名和密码");
    return;
  }
  console.log("登录表单数据:", loginForm.value);
  toLogin(loginForm.value).then((res) => {
    if (res.length > 0) {
      ElMessage.success("登录成功");
      localStorage.setItem("username", res[0].username);
      localStorage.setItem("userId", res[0].id);
      router.push({ path: "/admin" });
    } else {
      ElMessage.error("账号或密码错误");
    }
  });
};
</script>
<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
}

.login-form-wrapper {
  background-color: #f5f5f5;
  border-radius: 10px;
  // box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 50px;
  width: 400px;
  overflow: hidden;
  position: relative;
}

.login-form-wrapper .title {
  font-size: 20px;
  text-align: center;
  line-height: 50px;
}

.login-form-wrapper :deep(.el-input) {
  margin-top: 15px;
}

.login-form-wrapper :deep(.el-button) {
  margin-top: 15px;
}

.formBox {
  height: 170px;
  overflow: hidden;
}
</style>
