<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import { useCartStore } from "../../stores/cart";

export default {
  computed: {
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
    ...mapStores(useCartStore),
    ...mapState(useCartStore, ["carts"]),
  },
  methods: {
    ...mapActions(useBookStore, ["getAllBooks", "addToCart"]),
     ...mapActions(useCartStore, ["addToCart"]),
    async deleteItem(book) {
      try {
        await this.deleteBook(book.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    async addItemCart(book) {
      try {
        await this.addToCart(book);
      } catch (e) {
        alert(e);
      } 
    }
  },
  async mounted() {
    try {
      await this.getAllBooks();
    } catch (e) {
      alert(e);
    }
  }
};
</script>
<template>
  <div class="page-book">
    <section v-for="(row, i) of books" :key="i" class="livros">
      <img
        v-if="row.ft_book"
        :src="'static/' + row.ft_book"
        alt=""
        class="img-book"
      />
      <img v-else src="static/livro.png" alt="" class="img-book" />
      <h3>Livro - {{ row.title }}</h3>
      <h5>Editora - {{ row.publisher.name }}</h5>
      <h2 class="book.price">R$ {{ row.price }}</h2>
      <h4 class="msg-price">
        2x de {{ (row.price / 2).toFixed(2) }} s/juros
      </h4>
      <button @click="addItemCart(row)" class="button-add-cart">Adicionar ao carrinho</button>
    </section>
  </div>
</template>
