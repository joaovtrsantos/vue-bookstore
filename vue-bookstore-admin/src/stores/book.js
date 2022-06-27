import { defineStore } from 'pinia'

export const useBookStore = defineStore({
  id: 'book',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
