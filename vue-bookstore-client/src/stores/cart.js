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
      var exist = false;
      const { data } = await axios.get(
        "http://localhost:4000/carts?expand=book"
      );

      var itemsCart = data;
      itemsCart.forEach(cart => {
        if(cart.bookId === book.id) {
          alert("O livro já está no carrinho!");
          exist = true;
        }
      });
      
      if(exist != true) {
        try {
          const itemCart = {
            bookId: book.id,
            quantity: 1
          };

          const { data } = await axios.post("http://localhost:4000/carts", itemCart);
          this.carts.push(data);
          this.getAllCarts();
          alert('Item adicionado ao carrinho.');
          return Promise.resolve("Livro adicionada com sucesso!");
        } catch (e) {
          console.error(e);
          return Promise.reject(e);
        }
      }
    },
    async deleteItemCart(cart_id) {
      try {
        await axios.delete(`http://localhost:4000/carts/${cart_id}`);
        const index = this.carts.findIndex((cart) => cart.id === cart_id);
        this.carts.splice(index);
        this.getAllCarts();
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});
