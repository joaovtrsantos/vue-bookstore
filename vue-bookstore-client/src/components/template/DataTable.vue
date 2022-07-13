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
  <div class="page-book">
    <section v-for="(row, i) of items" :key="i" class="livros">
      <img
        v-if="row.ft_book"
        :src="'static/' + row.ft_book"
        alt=""
        class="img-book"
      />
      <img v-else src="static/livro.png" alt="" class="img-book" />
      <h3>Livro - {{ row.title }}</h3>
      <h5>Editora - {{ row.publisher.name }}</h5>
      <h2 style="font-weight: bold">R$ {{ row.price }}</h2>
      <h4 style="color: rgb(123, 123, 123)">
        2x de {{ (row.price / 2).toFixed(2) }} s/juros
      </h4>
    </section>
  </div>
</template>
