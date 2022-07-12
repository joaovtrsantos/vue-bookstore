<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    tableSize: {
      type: String,
    },
  },
  computed: {
    size() {
      return {
        width: this.tableSize,
      };
    },
  },
};
</script>
<template>
  <main>


      <div v-for="(row, i) of items" :key="i" class="livros">
        <img src="@/assets/img/livro.png" alt="" class="img-book">
        <h3>Livro - {{ row.title }}</h3>
        <h5>Editora - {{row.publisher_id}} </h5>
        <h2 style="font-weight: bold">R$ {{ row.price }}</h2>
        
      </div>

  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: space-around;
}

.livros {
  width: 20%; 
  display: flex; 
  flex-flow: column; 
  align-items: center; 
  background: rgb(192, 244, 255); 
  color: black;
  border-radius: 5px;
}

.img-book {
  width: 50%;
}
</style>
