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
    <form class="form-admin">
        <input type="text" v-model="publisher.name" class="input-text-admin" />
        <button @click="save" class="button-admin">
            {{ currentPublisher.id !== "" ? "Salvar" : "Adicionar" }}
        </button>
    </form>
</template>