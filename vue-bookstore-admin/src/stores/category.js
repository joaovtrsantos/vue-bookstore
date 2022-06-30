import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore({
  id: "category",
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
        return Promise.reject("Erro desconhecido ao consultar 'Catgory'");
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
    async updateCategory(category) {
      try {
        await axios.put(
          `http://localhost:4000/categories/${category.id}`,
          category
        );
        const index = this.categories.findIndex((c) => c.id === category.id);
        this.categories.splice(index, 1, { ...category });
        return Promise.resolve("Categoria alterada com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async saveCategory(category) {
      if (category.id) {
        return await this.updateCategory(category);
      } else {
        return await this.addCategory(category);
      }
    },
    async deleteCategory(category_id) {
      try {
        await axios.delete(`http://localhost:4000/categories/${category_id}`);
        const index = this.categories.findIndex(
          (category) => category.id === category_id
        );
        this.categories.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});