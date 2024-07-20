<script setup lang="ts">
import { useRoute, RouterView } from "vue-router";
import NoPage from "@/components/404/index.vue";
import WebHeader from "@/components/header/index.vue";
import WebFooter from "@/components/footer/index.vue";
let route = useRoute();
document.title = import.meta.env.VITE_APP_WEB_NAME;
</script>

<template>
  <div class="page" v-if="route.name">
    <WebHeader v-if="route.meta?.isHeaderAndFooter" />
    <RouterView :key="route.fullPath" />
    <WebFooter v-if="route.meta?.isHeaderAndFooter" />
  </div>
  <NoPage v-else />
</template>

<style scoped>
.page {
  min-height: 100vh;
}
</style>
