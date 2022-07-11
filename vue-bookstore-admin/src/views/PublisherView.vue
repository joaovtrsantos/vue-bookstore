<script>
import ListPublisher from "../components/publisher/ListPublisher.vue";
import FormPublisher from "../components/publisher/CadPublisher.vue";
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
  <main>
    <h1>Administração de Editoras</h1>
    <span class="span-link">
      <router-link to="cadPublisher" class="cad-link"> 
        <p>Cadastrar editoras</p>
        <img src="@/assets/img/add.png" alt="" style="width: 15%; margin-left: 2%">
      </router-link>
    </span>
    <div class="div-table">
      <ListPublisher @edit="prepareToUpdate" />
    </div>
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>