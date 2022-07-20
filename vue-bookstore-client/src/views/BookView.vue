<script>
import ListBook from "../components/book/ListBook.vue";

export default {
  components: { ListBook },
};
</script>
<template>
  <main>
    <h1 class="title">Administração de Livros</h1>
    <div class="div-table">
      <ListBook/>
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
