<script>
import ListBook from "../components/book/ListBook.vue";
import CadBook from "../components/book/CadBook.vue";
export default {
  components: { ListBook, CadBook },
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
    <h1>Administração de Livros</h1>
    <span class="span-link">
      <router-link to="cadBook" class="cad-link"> 
        <p>Cadastrar livro</p>
        <img src="@/assets/img/add.png" alt="" style="width: 15%; margin-left: 2%">
      </router-link>
    </span>
    <div class="div-table">
      <ListBook @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
