import { defineStore } from 'pinia'
import axios from "axios";

export const usePublisherStore = defineStore({
  id: 'publisher',
  state: () => ({
    publishers: []
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getAllPublishers() {
      try {
        const { data } = await axios.get("http://localhost:4000/publishers");
        this.publishers = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status == 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Unknown error to search 'Publisher'");
      }
    },
    async addPublisher(publisher) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/categories",
          publisher
        );
        this.publishers.push(data);
        return Promise.resolve("Publisher added");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async updatePublisher(publisher) {
      try {
        await axios.put(
          `http://localhost:4000/publishers/${publisher.id}`,
          publisher
        );
        const index = this.publishers.findIndex((p) => p.id === publisher.id);
        this.publishers.splice(index, 1, { ...publisher });
        return Promise.resolve("Publisher changed");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async savePublisher(publisher) {
      if (publisher.id)
        return await this.updatePublisher(publisher);
      return await this.addPublisher(publisher);
    },
    async deletePublisher(id) {
      try {
        await axios.delete(`http://localhost:4000/publishers/${id}`);
        const index = this.publishers.findIndex(
          (publisher) => publisher.id === id
        );
        this.publishers.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Delete error")
      }
    }
  }
})
