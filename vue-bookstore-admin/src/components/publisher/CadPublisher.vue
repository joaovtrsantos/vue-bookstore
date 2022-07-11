<script>
import { mapActions } from "pinia";
import { usePublisherStore } from "@/stores/publisher";
export default {
  data() {
    return {
      publisher: {
        id: "",
        name: "",
        site: ""
      },
    };
  },
  mounted() {
    if(this.$route.params.id)
      this.publisher = this.$route.params;
  },
  methods: {
    ...mapActions(usePublisherStore, ["savePublisher"]),
    async save() {
      try {
        if(
          this.publisher.name != "" && this.publisher.site != "") {
            const msg = await this.savePublisher(this.publisher);
            alert(msg);
          } 
          else
            alert("informe todos os campos!");
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>
<template>
  <div class="form">
    <div class="tab-content">
      <div>
        <h1 class="cad-title">Cadastrar Editora</h1>
        <form>
          <div class="field-wrap">
            <input
              type="text"
              placeholder="Nome da Editora *"
              v-model="publisher.name"
              required
              autocomplete="off"
              class="input-cad-book"
            />
          </div>
          <div class="field-wrap">
            <input
              type="text"
              placeholder="Link para o site *"
              v-model="publisher.site"
              required
              autocomplete="off"
              class="input-cad-book"
            />
          </div>
          <button type="submit" @click="save" class="button button-block">
            {{ this.$route.params.id ? "Editar" : "Adicionar" }}
          </button>
        </form>
      </div>
      <br />
    </div>
  </div>
</template>
