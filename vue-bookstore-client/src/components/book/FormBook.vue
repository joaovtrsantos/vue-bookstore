<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
export default {
  props: {
    currentBook: {
      type: Object,
    },
  },
  data() {
    return {
      book: this.currentBook,
    };
  },
  methods: {
    ...mapActions(useBookStore, ["saveBook"]),
    async save() {
      try {
        const msg = await this.saveBook(this.book);
        alert(msg);
        Object.assign(this.book, {
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
    <input type="text" v-model="book.title" class="input-text-admin" />
    <button @click="save" class="button-admin">
      {{ currentBook.id !== "" ? "Salvar" : "Adicionar" }}
    </button>
  </form>
</template>
