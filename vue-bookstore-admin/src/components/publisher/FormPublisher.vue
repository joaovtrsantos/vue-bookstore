<script>
import { mapActions } from "pinia";
import { usePublisherStore } from "@/stores/publisher";

export default {
    props: {
        currentPublisher: {
            type: Object,
        },
    },
    data() {
        return {
            publisher: this.currentPublisher,
        };
    },
    methods: {
        ...mapActions(usePublisherStore, ["savePublisher"]),
        async save() {
            try {
                const msg = await this.savePublisher(this.publisher);
                alert(msg);
                Object.assign(this.publisher, {
                    id: "",
                    name: "",
                    sites: ""
                });
            } catch (e) {
                alert("Unknown error.");
            }
        },
    },
};
</script>

<template>
    <div class="publisher-form">
        <input type="text" v-model="publisher.name" />
        <button @click="save">
            {{ currentPublisher.id !== "" ? "Salvar" : "Adicionar" }}
        </button>
    </div>
</template>

<style scoped>
.publisher-form input {
    width: 75%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid gray;
    padding-left: 20px;
    font-size: 1.2em;
}

.publisher-form button {
    height: 35px;
    width: 20%;
    margin-left: 2%;
    background-color: rgb(63, 63, 125);
    color: whitesmoke;
    font-size: 1.2em;
    border-radius: 20px;
    border: 0;
}

.publisher-form {
    margin: 3% auto;
    width: 70%;
}
</style>