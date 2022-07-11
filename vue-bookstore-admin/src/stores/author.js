import { defineStore } from 'pinia'
import axios from "axios";

export const useAuthorStore = defineStore({
    id: 'author',
    state: () => ({
        authors: []
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        async getAllAuthors() {
            try {
                const { data } = await axios.get("http://localhost:4000/authors");
                this.authors = data;
                return Promise.resolve();
            } catch (e) {
                console.error(e);
                if (e.response.status == 404)
                    return Promise.reject(e.response.statusText);
                return Promise.reject("Unknown error to search 'Author'");
            }
        },
        async addAuthor(author) {
            try {
                const { data } = await axios.post(
                    "http://localhost:4000/authors",
                    author
                );
                this.authors.push(data);
                
                return Promise.resolve("Author added");
            } catch (e) {
                console.error(e);
                return Promise.reject(e);
            }
        },
        async updateAuthor(author) {
            try {
                await axios.put(
                    `http://localhost:4000/authors/${author.id}`,
                    author
                );
                const index = this.authors.findIndex((a) => a.id === author.id);
                this.authors.splice(index, 1, { ...author });
                return Promise.resolve("Author changed");
            } catch (e) {
                console.error(e);
                return Promise.reject(e);
            }
        },
        async saveAuthor(author) {
            if (author.id)
                return await this.updateAuthor(author);
            return await this.addAuthor(author);
        },
        async deleteAuthor(id) {
            try {
                await axios.delete(`http://localhost:4000/authors/${id}`);
                const index = this.authors.findIndex(
                    (author) => author.id === id
                );
                this.authors.splice(index, 1);
                return Promise.resolve();
            } catch (e) {
                return Promise.reject("Delete error")
            }
        }
    }
})
