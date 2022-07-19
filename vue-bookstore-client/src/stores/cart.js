import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    carts: [],
  }),
  actions: {
    async getAllCarts() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/carts?expand=book"
        );
        this.carts = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Carrinho'");
      }
    },
    async addToCart(book) {
      try {
        console.log(book);
        const itemCart = {
          bookId: book.id,
          quantity: 1
        };
        console.log(itemCart);
         const { data } = await axios.post("http://localhost:4000/carts", itemCart);
         this.carts.push(data);
        return Promise.resolve("Livro adicionada com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
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
    async saveBook(book) {
      if (book.id) {
        return await this.updateBook(book);
      } else {
        return await this.addBook(book);
      }
    },
    async deleteItemCart(cart_id) {
      try {
        await axios.delete(`http://localhost:4000/carts/${cart_id}`);
        const index = this.carts.findIndex((cart) => cart.id === cart_id);
        this.carts.splice(index);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});
