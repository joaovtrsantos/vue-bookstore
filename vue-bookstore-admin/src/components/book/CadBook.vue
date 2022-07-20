<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
export default {
  data() {
    return {
      book: {
        id: "",
        title: "",
        isbn: "",
        categoryId: "",
        publisherId: "",
        quantity: "",
        price: "",
      },
    };
  },
  mounted() {
    if(this.$route.params.id)
      this.book = this.$route.params;
  },
  methods: {
    ...mapActions(useBookStore, ["saveBook"]),
    async save() {
      try {
        if(
          this.book.title != "" && this.book.isbn != "" && 
          this.book.categoryId != "" && this.book.publisherId != "" && 
          this.book.quantity != "" && this.book.price != ""
          ) {
            const msg = await this.saveBook(this.book);
            alert("Ação concluída!");
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
        <h1 class="cad-title">Cadastrar Produto</h1>
        <form>
          <div class="field-wrap">
            <input
              type="text"
              placeholder="Título *"
              v-model="book.title"
              required
              autocomplete="off"
              class="input-cad-book"
            />
          </div>
          <div class="field-wrap">
            <input
              type="text"
              placeholder="ISBN *"
              v-model="book.isbn"
              required
              autocomplete="off"
              class="input-cad-book"
            />
          </div>
          <div class="row">
            <div class="field-wrap">
              <input
                type="number"
                placeholder="Categoria(ID) *"
                v-model="book.categoryId"
                required
                autocomplete="off"
                class="input-cad-book"
              />
            </div>
            <div class="field-wrap">
              <input
                type="number"
                placeholder="Editora(ID) *"
                v-model="book.publisherId"
                required
                autocomplete="off"
                class="input-cad-book"
              />
            </div>
          </div>
          <div class="row">
            <div class="field-wrap">
              <input
                type="number"
                step=".01"
                placeholder="Quantidade *"
                v-model="book.quantity"
                required
                autocomplete="off"
                class="input-cad-book"
              />
            </div>
            <div class="field-wrap">
              <input
                type="number"
                placeholder="Preço *"
                v-model="book.price"
                required
                autocomplete="off"
                class="input-cad-book"
              />
            </div>
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
