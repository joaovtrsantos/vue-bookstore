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
  },
  computed: {
    getData() {
      var newItem = this.items;
     /* for(var i = 0; i < newItem.length; i++) {
        }*/
        
      
      return newItem;
    }
  }
};
</script>
<template>

  <table>
        <thead>
          <tr>
            <th class="text-left" v-for="(column) of columns" :key="column.field">
          <span>
            <h2>{{ column.label }}</h2>
          </span>
        </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) of items" :key="i">
            <td v-for="(column) of columns" :key="columns.field">{{ row[column.field] }}</td>
          </tr>
        </tbody>
      </table>
</template>

<style scoped>

</style>