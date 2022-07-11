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
  <table :style="size">
    <thead>
      <tr>
        <th v-for="column of columns" :key="column.field">
          <span>
            <h2>{{ column.label }}</h2>
          </span>
        </th>
        <th class="action-column">
          <span> <h2>Ações</h2> </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) of items" :key="i">
        <td v-for="column of columns" :key="column.field">
          {{ row[column.field] }}
        </td>
        <td class="column-add-edit">
          <router-link
            :to="{ 
              name: 'cadBook', 
              params: { 
                id: items[i].id, 
                title: items[i].title, 
                isbn: items[i].isbn,  
                category_id: items[i].category_id,
                publisher_id: items[i].publisher_id,
                quantity: items[i]. quantity,
                price: items[i].price
                } }"
            v-if="items[0].isbn"
          >
            <img
              @click="prepareEdit(row)"
              src="@/assets/img/edit.png"
              alt="Editar"
              class="table-icons"
            />
          </router-link>
          <router-link
            :to="{ 
              name: 'cadPublisher', 
              params: { 
                id: items[i].id, 
                name: items[i].name, 
                site: items[i].site,  
                } }"
            v-else-if="items[0].site"
          >
            <img
              @click="prepareEdit(row)"
              src="@/assets/img/edit.png"
              alt="Editar"
              class="table-icons"
            />
          </router-link>
          <img
            v-else
            @click="$emit('edit', row)"
            src="@/assets/img/edit.png"
            alt="Editar"
            class="table-icons"
          />
          <img
            @click="$emit('delete', row)"
            src="@/assets/img/delete.png"
            alt="Apagar"
            class="table-icons"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: var(width);
}

.column-add-edit {
  text-align: center;
}
</style>
