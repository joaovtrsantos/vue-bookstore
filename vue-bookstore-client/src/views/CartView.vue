<script>
import ListCart from "../components/cart/ListCart.vue";

export default {
  components: { ListCart },
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
    <h1 class="title">Carrinho de Compras</h1>
    <div class="div-table">
      <ListCart @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
