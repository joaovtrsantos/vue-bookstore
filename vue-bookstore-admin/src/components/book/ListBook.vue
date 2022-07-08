<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "ID", field: "id" },
        { label: "Título", field: "title" },
        { label: "ISBN", field: "isbn" },
        { label: "Categoria", field: "category_id" },
        { label: "Editora", field: "publisher_id" },
        { label: "Quantidade", field: "quantity" },
        { label: "Preço", field: "price" },
      ],
      tableSize : '80%',
    };
  },
  computed: {
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
  },
  methods: {
    ...mapActions(useBookStore, ["getAllBooks", "deleteBook"]),
    async deleteItem(book) {
      try {
        await this.deleteBook(book.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllBooks();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
    <data-table
      :columns="columns"
      :items="books"
      :tableSize="tableSize"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    />
</template>
