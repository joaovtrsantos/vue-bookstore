import { defineStore } from 'pinia';
import axios from "axios";

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    categories: [],
  }),
  actions: {
    async getAllCategories() {
      try {
        const { data } = await axios.get("http://localhost:4000/categories");
        this.categories = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Category'");
      }
    },
    async addCategory(category) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/categories",
          category
        );
        this.categories.push(data);
        return Promise.resolve("Categoria adicionada com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
  }
})
