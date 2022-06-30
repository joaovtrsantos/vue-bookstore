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
    <table class="data-table">
        <thead>
            <tr>
                <th class="text-left" v-for="column of columns" :key="column.field">
                    <span>
                        <h2>{{ column.label }}</h2>
                    </span>
                </th>
                <th class="text-left">
                    <span>
                        <h2>Ações</h2>
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, i) of items" :key="i">
                <!-- <td v-for="(data, i) of row" :key="i">{{ data }}</td> -->
                <td v-for="column of columns" :key="column.field">
                    {{ row[column.field] }}
                </td>
                <td>
                    <button @click="$emit('edit', row)">Update</button>
                    <button @click="$emit('delete', row)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.data-table {
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
    width: 100%;
}

th {
    border-bottom: 2px solid #444;
    text-align: left;
}

td {
    padding: 10px;
}

thead tr {
    background-color: #444;
    color: whitesmoke;
}

tbody tr:nth-child(odd) {
    background-color: #c3c3c3;
}
</style>