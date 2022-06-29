<script>
  import { mapState, mapStores, mapActions } from "pinia";
  import { useCategoryStore } from "@/stores/category";
  import DataTable from "../template/DataTable.vue";

 export default {
   data() {
    return {
      columns: [
        { label: "ID", field: "id"},
        { label: "Descrição", field: "description" }
      ],
    }
   },
    computed: {
        ...mapStores(useCategoryStore),
        ...mapState(useCategoryStore, ["categories"]),
    },
    methods: {
        ...mapActions(useCategoryStore, ["getAllCategories"])
    },
    async mounted() {
        try {
            await this.getAllCategories();
        }
        catch (e) {
            alert(e);
        }
    },
    components: { DataTable }
};
</script>
<template>
    <DataTable 
    :columns="columns"
    :items="categories"
    />
</template>
