<script>
import { mapActions } from "pinia";
import { useAuthorStore } from "@/stores/author";
export default {
  props: {
    currentAuthor: {
      type: Object,
    },
  },
  data() {
    return {
      author: this.currentAuthor,
    };
  },
  methods: {
    ...mapActions(useAuthorStore, ["saveAuthor"]),
    async save() {
      try {
        const msg = await this.saveAuthor(this.author);
        alert(msg);
        Object.assign(this.author, {
          id: "",
          name: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
  <form class="form-admin">
    <input type="text" v-model="author.name" class="input-text-admin" />
    <button @click="save" class="button-admin">
      {{ currentAuthor.id !== "" ? "Salvar" : "Adicionar" }}
    </button>
  </form>
</template>