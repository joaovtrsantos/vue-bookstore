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
};
</script>
<template>
  <table>
    <thead>
      <tr>
        <th v-for="column of columns" :key="column.field">
          <span>
            <h2>{{ column.label }}</h2>
          </span>
        </th>
        <th>
          <span>
            <h2>Ações</h2>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) of items" :key="i">
        <td v-for="column of columns" :key="column.field">
          {{ row[column.field] }}
        </td>
        <td>
          <img @click="$emit('edit', row)" src="@/assets/img/edit.png" alt="Update" class="table-icons" />
          <img @click="$emit('delete', row)" src="@/assets/img/delete.png" alt="Delete" class="table-icons" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
