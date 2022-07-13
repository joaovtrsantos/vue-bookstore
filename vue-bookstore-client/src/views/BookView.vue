<script>
import ListBook from "../components/book/ListBook.vue";

export default {
  components: { ListBook },
  data() {
    return {
      currentBook: {
        id: "",
        title: "",
        isbn: "",
        categoryId: "",
        publisherId: "",
        quantity: "",
        price: "",
        date: "",
      },
    };
  },
  methods: {
    prepareToUpdate(book) {
      Object.assign(this.currentBook, book);
    },
  },
};
</script>
<template>
  <main>
    <h1 class="title">Administração de Livros</h1>
    <div class="div-table">
      <ListBook @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
