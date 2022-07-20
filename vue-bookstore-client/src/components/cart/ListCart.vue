<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCartStore } from "@/stores/cart";
import { useBookStore } from "@/stores/book";

export default {
  data() {
    return {
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
  <div v-else class="div-page-cart">
    <div class="cart-item-block">
      <div v-for="(row, i) of carts" :key="i" class="items-cart">
        <article class="article-item-cart">
          <h5 class="text-price-cart">Preço</h5>
          <section class="section-item-cart">
            <div class="info-book-cart">
            <div class="div-img-book">
              <img
                v-if="row.book.ft_book"
                :src="'static/' + row.book.ft_book"
                alt="capa do livro"
                class="img-book-cart"
              />
              <img v-else src="static/livro.png" class="img-book">
            </div>
              <div>
                <h2>{{row.book.title}}</h2>
                <h4>por Brenon Paul</h4>
                <h6 v-if="row.book.quantity >= row.quantity" class="text-green">Em estoque</h6>
                <h6 v-else class="text-red">Indisponível</h6>
                <label for="quantity">
                  Quantidade
                  <select v-model="row.quantity" class="select-quantity">
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
                <h5 @click="deleteItem(row)" class="button-delete">Excluir</h5>
              </div>
            </div>
            <div class="div-info-price">
              <h2 class="book-price">R$ {{row.book.price}}</h2>
              <h4>em até 2x de</h4>
              <h4>R$ {{ (row.book.price / 2).toFixed(2) }} sem juros</h4>
            </div>
          </section>
        </article>
      </div>
    </div>

    <div class="total-buy">
      <h6 class="text-shipping"><img src="static/check.png" alt="check" style="width: 6%"> Seu pedido se qualifica para Frete GRÁTIS. </h6>
      <h3>Subtotal ({{ calcTotalCart(carts, totalCart).totalItems }} itens): <br/> <h2 class="book-price">R$ {{ calcTotalCart(carts, totalCart).totalPrice.toFixed(2) }}</h2></h3>
      <button @click="buyItems(carts)" class="button-add-cart">Fechar pedido</button>
    </div>
  </div>
</template>
