<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: [
        { label: "Título", field: "title" },
        { label: "Editora", field: "publisherId" },
        { label: "Preço", field: "price" },
      ]
    };
  },
  computed: {
    ...mapStores(useCartStore),
    ...mapState(useCartStore, ["carts"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getAllCarts", "deleteItemCart"]),
    async deleteItem(cart) {
      try {
        await this.deleteItemCart(cart.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    async buyItems(carts) {
      carts.forEach(cart => {
        this.deleteItem(cart);
      });
      // try {
      //   await this.deleteItemCart(cart.id);
      //   alert("Item excluído com sucesso.");
      // } catch (e) {
      //   alert(e);
      // }
    },
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
<div style="width: 100%; display: flex; justify-content: space-between;">
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
              <h6 v-if="row.book.quantity > 0" style="color: green">Em estoque</h6>
              <h6 v-else style="color: red">Indisponível</h6>
              <label for="quantity">
                Quantidade
                <select v-model="row.quantity">
                  <option disabled value="">Escolha um item</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                {{row.quantity}}
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
    <h3>Subtotal (2 itens): <br/> R$ 168.48</h3>
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
