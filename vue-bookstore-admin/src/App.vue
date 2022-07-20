<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/book">Livros</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/category">Categorias</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/publisher">Editoras</RouterLink>
    </nav>
    <nav>
      <RouterLink to="/author">Autores</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 78.2vh;
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
