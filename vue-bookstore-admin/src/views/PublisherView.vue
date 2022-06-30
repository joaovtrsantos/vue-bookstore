<script>
import ListPublisher from "../components/publisher/ListPublisher.vue";
import FormPublisher from "../components/publisher/FormPublisher.vue";
export default {
  components: { ListPublisher, FormPublisher },
  data() {
    return {
      currentPublisher: {
        id: "",
        name: "",
        site: ""
      },
    };
  },
  methods: {
    prepareToUpdate(publisher) {
      Object.assign(this.currentPublisher, publisher);
    },
  },
};
</script>
<template>
  <h1>Cadastro de Editoras</h1>
  <FormPublisher :currentPublisher="currentPublisher" />
  <ListPublisher @edit="prepareToUpdate" />
</template>

<style>
</style>