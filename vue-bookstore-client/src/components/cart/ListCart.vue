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
      ],
      tableSize : '80%',
    };
  },
  computed: {
    ...mapStores(useCartStore),
    ...mapState(useCartStore, ["carts"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getAllCarts", "deleteBook"]),
    async deleteItem(book) {
      try {
        await this.deleteBook(book.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
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
<div style="display: flex; flex-flow: column; align-items: center; width: 100%;">
  <div v-for="(row, i) of carts" :key="i" style="background: whitesmoke; width: 65%; display: flex; justify-content: space-between; color: black;">
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
              <select name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <br>
            <button>Excluir</button>
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
    <!-- <data-table
      :columns="columns"
      :items="carts"
      :tableSize="tableSize"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    /> -->
</template>
