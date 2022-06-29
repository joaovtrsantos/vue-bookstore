<script>
    import { mapState, mapStores, mapActions } from "pinia";
    import { useCategoryStore } from "@/stores/category";

   export default {
    computed: {
        ...mapStores(useCategoryStore),
        ...mapState(useCategoryStore, ["categories"]),
    },
    methods: {
        ...mapActions(useCategoryStore, ["getAllCategories"])
    },

};
</script>
<template>
    <form>
      <input type="text" placeholder="     Pesquisar">
      <button>Adicionar</button>
    </form>
</template>