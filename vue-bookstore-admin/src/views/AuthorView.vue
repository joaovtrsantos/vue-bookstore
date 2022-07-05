<script>
import ListAuthor from "../components/author/ListAuthor.vue";
import FormAuthor from "../components/author/FormAuthor.vue";
export default {
  components: { ListAuthor, FormAuthor },
  data() {
    return {
      currentAuthor: {
        id: "",
        name: "",
        site: ""
      },
    };
  },
  methods: {
    prepareToUpdate(author) {
      Object.assign(this.currentAuthor, author);
    },
  },
};
</script>
<template>
  <main>
    <h1>Cadastro de Autores</h1>
    <FormAuthor :currentAuthor="currentAuthor" />
    <div class="div-table">
      <ListAuthor @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>