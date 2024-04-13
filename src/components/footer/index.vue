<template>
  <footer>
    <div class="page">
      <div class="pageBox w1200">
        <div class="box1">
          <img src="@/assets/imgs/图书_1.png" alt="">
          <span>{{ webName }}</span>
        </div>
        <div class="box2">
          <p>初辰图书网以丰富的图书资源、精准的推荐系统、优质的阅读体验、专业的编辑团队、灵活的购书方式、活跃的社区交流以及便捷的售后服务为优势，致力于为广大读者提供一个便捷、舒适、专业的阅读平台。</p>
          <p>无论你是书虫还是阅读新手，初辰图书网都能满足你的阅读需求，让你在阅读中收获知识、享受乐趣。</p>
        </div>
      </div>
      <el-backtop :right="60" :bottom="75" />
    </div>
    <div class="bot">
      <div class="botBox w1200">
        <span>Copyright 2024 {{ webName }}</span>
        <a href="https://github.com/pbstar/vue3-pbstar-books">vue3-pbstar-books</a>
      </div>
    </div>
  </footer>

</template>
<script setup lang="ts">
import { ref } from 'vue'
const webName = ref(import.meta.env.VITE_APP_WEB_NAME)
</script>
<style lang="scss" scoped>
.page {
  height: 150px;
  background-color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  min-width: 1200px;

  .pageBox {
    display: flex;
    align-items: center;

    .box1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 30px;
      margin-right: 30px;
      border-right: 1px solid #fff;
      flex-shrink: 0;

      img {
        width: 60px;
        height: 60px;
      }

      span {
        color: #ddd;
      }
    }

    .box2 {
      line-height: 25px;
      text-indent: 2em;
      font-size: 14px;
      color: #ddd;
    }


  }
}

.bot {
  height: 36px;
  line-height: 36px;
  font-size: 13px;
  background-color: #333;
  color: #c3c3c3;
  min-width: 1200px;

  .botBox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #c3c3c3;
    }
  }
}
</style>
