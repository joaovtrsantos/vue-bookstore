<script>
export default {
  data() {
    return {
      newItems: "this.items",
    };
  },
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
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.isbn }}</td>
        <td>{{ row.category.description }}</td>
        <td>{{ row.publisher.name }}</td>
        <td>{{ row.quantity }}</td>
        <td>{{ row.price }}</td>
        <td class="column-add-edit">
          <router-link
            :to="{
              name: 'cadBook',
              params: {
                id: items[i].id,
                title: items[i].title,
                isbn: items[i].isbn,
                categoryId: items[i].categoryId,
                publisherId: items[i].publisherId,
                quantity: items[i].quantity,
                price: items[i].price,
              },
            }"
          >
            <img
              @click="prepareEdit(row)"
              src="@/assets/img/edit.png"
              alt="Editar"
              class="table-icons"
            />
          </router-link>
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
