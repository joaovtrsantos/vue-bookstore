<script>
import ListCategory from "../components/category/ListCategory.vue";
import FormCategory from "../components/category/FormCategory.vue";
export default {
  components: { ListCategory, FormCategory },
  data() {
    return {
      currentCategory: {
        id: "",
        description: "",
      },
    };
  },
  methods: {
    prepareToUpdate(category) {
      Object.assign(this.currentCategory, category);
    },
  },
};
</script>
<template>
  <main>
    <h1>Cadastro de Categorias</h1>
    <FormCategory :currentCategory="currentCategory" />
    <div class="div-table">
      <ListCategory @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
