<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useAuthorStore } from "@/stores/author";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Nome", field: "name" },
      ],
    };
  },
  computed: {
    ...mapStores(useAuthorStore),
    ...mapState(useAuthorStore, ["authors"]),
  },
  methods: {
    ...mapActions(useAuthorStore, ["getAllAuthors", "deleteAuthor"]),
    async deleteItem(author) {
      try {
        await this.deleteAuthor(author.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllAuthors();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <data-table :columns="columns" :items="authors" @edit="$emit('edit', $event)" @delete="deleteItem" />
</template>