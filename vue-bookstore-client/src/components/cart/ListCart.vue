<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";
import { useBookStore } from "@/stores/book";

export default {
  data() {
    return {
      columns: [
        { label: "Título", field: "title" },
        { label: "Editora", field: "publisherId" },
        { label: "Preço", field: "price" },
      ],
      totalCart: {
        totalItems: 0,
        totalPrice: 0,
      },
      bought: false,
    };
  },
  computed: {
    ...mapStores(useCartStore),
    ...mapState(useCartStore, ["carts"]),
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getAllCarts", "deleteItemCart"]),
    ...mapActions(useBookStore, ["editBookQuantity"]),
    async deleteItem(cart) {
      try {
        await this.deleteItemCart(cart.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    buyItems(carts) {
      console.log(carts[0].book.quantity);
      console.log(carts[0].quantity);
      var error = 0;
      carts.forEach(cart => {
        if(cart.book.quantity < cart.quantity) {
          alert("O livro " + cart.book.title + " não possui examplares suficiente, temos " + cart.book.quantity + " unidade(s)");
          error++;
        }
      });
      if(error === 0) {
        carts.forEach(cart => {
          this.editBookQuantity(cart.book, cart.quantity);
          this.deleteItem(cart);
          this.bought = true;
        });
      }   
    },
    calcTotalCart(carts, totalCart) {
      var n = 0;
      var price = 0;
      carts.forEach(cart => {
        n++;
        price = price + cart.book.price * cart.quantity;
      });
      this.totalCart.totalItems = n;
      this.totalCart.totalPrice = price;
      return totalCart;
    }
  },
  async mounted() {
    try {
      await this.getAllCarts();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
<div v-if="bought === true">compra finalizada</div>
<div v-else-if="!carts[0]">carrinho vazio</div>
<div v-else style="width: 100%; display: flex; justify-content: space-between;">
  <div style="width: 65%; margin-left: 5%;display: flex; flex-flow: column; align-items: center; ">
    <div v-for="(row, i) of carts" :key="i" style="background: whitesmoke; width: 100%; display: flex; justify-content: space-between; color: black;">
      <article style="width: 100%; border-top: 1px solid #ccc">
        <h5 style="text-align: right; padding-right: 3%; color: gray;">Preço</h5>
        <section style="display: flex; justify-content: space-between;">
          <div style="display: flex; width: 40%;">
          <div style="width: 40%; margin-right: 2%;x'">
            <img
              v-if="row.book.ft_book"
              :src="'static/' + row.book.ft_book"
              alt=""
              style="width: 100%"
            />
            <img v-else src="static/livro.png" style="width: 100%;">
          </div>
            <div>
              <h2>{{row.book.title}}</h2>
              <h4>por Brenon Paul</h4>
              <h6 v-if="row.book.quantity >= row.quantity" style="color: green">Em estoque</h6>
              <h6 v-else style="color: red">Indisponível</h6>
              <label for="quantity">
                Quantidade
                <select v-model="row.quantity">
                  <option disabled value="">Escolha a quantidade</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </label>
              <br>
              <button @click="deleteItem(row)">Excluir</button>
            </div>
          </div>
          <div style="width: 30%; text-align: right; padding-right: 3%;">
            <h2><b>R$ {{row.book.price}}</b></h2>
            <h4>em até 2x de</h4>
            <h4>R$ {{ (row.book.price / 2).toFixed(2) }} sem juros</h4>
          </div>
        </section>
      </article>
    </div>
  </div>

  <div style="background: whitesmoke; color: black; width: 20%; margin-right: 5%; height: 200px; padding: 3%; text-align: center;">
    <h6 style="text-align: justify">Seu pedido se qualifica para Frete GRÁTIS. </h6>
    <h3>Subtotal ({{ calcTotalCart(carts, totalCart).totalItems }} itens): <br/> R$ {{ calcTotalCart(carts, totalCart).totalPrice.toFixed(2) }}</h3>
    <button @click="buyItems(carts)" style="background: yellow;">Fechar pedido</button>
  </div>
</div>
    <!-- <data-table
      :columns="columns"
      :items="carts"
      :tableSize="tableSize"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    /> -->
</template>
