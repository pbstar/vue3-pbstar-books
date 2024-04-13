import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', () => {
  const types = ref([
    '科技教育', '生活时尚', '少儿图书', '文学艺术'
  ])

  return { types }
})
