import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore({
  id: "book",
  state: () => ({
    books: [],
  }),
  actions: {
    async getAllBooks() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/books?expand=category&expand=publisher"
        );
        this.books = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Books'");
      }
    },
    async updateBook(book) {
      try {
        await axios.put(`http://localhost:4000/books/${book.id}`, book);
        const index = this.books.findIndex((b) => b.id === book.id);
        this.books.splice(index, 1, { ...book });
        return Promise.resolve("Livro alterado com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async editBookQuantity(book, quantity) {
      try {
        book.quantity = book.quantity - quantity;
        this.updateBook(book);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao editar quantidade de livro");
      }
    },
  },
});
