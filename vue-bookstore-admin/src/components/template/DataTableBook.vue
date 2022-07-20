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
        <td style="width: 5%" id="item-center">{{ row.id }}</td>
        <td style="width: 30%">{{ row.title }}</td>
        <td style="width: 10%" id="item-center">{{ row.isbn }}</td>
        <td style="width: 25%" id="item-center">{{ row.category.description }}</td>
        <td style="width: 20%">{{ row.publisher.name }}</td>
        <td id="item-center">{{ row.quantity }}</td>
        <td id="item-center">{{ row.price }}</td>
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
