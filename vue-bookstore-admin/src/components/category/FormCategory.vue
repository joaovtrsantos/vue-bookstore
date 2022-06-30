<script>
import { mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";
export default {
  props: {
    currentCategory: {
      type: Object,
    },
  },
  data() {
    return {
      category: this.currentCategory,
    };
  },
  methods: {
    ...mapActions(useCategoryStore, ["saveCategory"]),
    async save() {
      try {
        const msg = await this.saveCategory(this.category);
        alert(msg);
        Object.assign(this.category, {
          id: "",
          description: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
  <form class="form-admin">
    <input
      type="text"
      v-model="category.description"
      class="input-text-admin"
    />
    <button @click="save" class="button-admin">
      {{ currentCategory.id !== "" ? "Salvar" : "Adicionar" }}
    </button>
  </form>
</template>