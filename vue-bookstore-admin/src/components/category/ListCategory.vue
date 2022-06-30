<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Descrição", field: "description" },
      ],
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCategoryStore, ["getAllCategories", "deleteCategory"]),
    async deleteItem(category) {
      try {
        await this.deleteCategory(category.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <data-table :columns="columns" :items="categories" @edit="$emit('edit', $event)" @delete="deleteItem" />
</template>