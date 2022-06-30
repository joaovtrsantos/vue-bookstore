<script>
import ListBook from "../components/book/ListBook.vue";
import FormBook from "../components/book/FormBook.vue";
export default {
  components: { ListBook, FormBook },
  data() {
    return {
      currentBook: {
        id: "",
        title: "",
        isbn: "",
        category_id: "",
        publisher_id: "",
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
    <h1>Cadastro de Livros</h1>
    <FormBook :currentBook="currentBook" />
    <div class="div-table">
      <ListBook @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
