<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">Livros</RouterLink>
      <input
        type="search"
        class="input-search"
        placeholder="   Pesquise por um livro..."
      />
      <router-link to="/cart" class="link-cart">
        <p class="text-cart">carrinho</p>
        <img src="static/carrinho.png" alt="carrinho" class="img-cart" />
      </router-link>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 81.5vh;
}

header {
  height: 10%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(18, 18, 48, 1) 35%,
    rgba(16, 100, 117, 1) 100%
  );
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

nav {
  margin-left: 3%;
}

a:hover {
  color: rgba(16, 100, 117, 1);
}
</style>
