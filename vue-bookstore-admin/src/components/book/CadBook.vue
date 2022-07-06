<script>
import { mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
export default {
  data() {
    return {
      book: {
        id: "",
        title: "",
        isbn: "",
        category_id: "",
        publisher_id: "",
        quantity: "",
        price: "",
        date: "",
      },
    };
  },
  methods: {
    ...mapActions(useBookStore, ["saveBook"]),
    async save() {
      try {
        const msg = await this.saveBook(this.book);
        alert(msg);
        Object.assign(this.book, {
          currentBook: {
            id: "",
            title: "",
            isbn: "",
            category_id: "",
            publisher_id: "",
            quantity: "",
            price: "",
            date: "",
          },
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>
<template>
  <div class="form">
    <div class="tab-content">
      <div>   
        <h1>Cadastrar Produto</h1> 
        <form action="/" method="post">  
          <div class="field-wrap">
            <input type="text" placeholder="Título *" v-model="book.title" required autocomplete="off" />
          </div>
            <div class="field-wrap">
              <input type="text" placeholder="ISBN *" v-model="book.isbn" required autocomplete="off"/>
            </div>
          <div class="row">
            <div class="field-wrap">
              <input type="number" placeholder="Categoria(ID) *" v-model="book.category_id" required autocomplete="off"/>
            </div>
            <div class="field-wrap">
              <input type="number" placeholder="Editora(ID) *" v-model="book.publisher_id" required autocomplete="off"/>
            </div>
          </div>
          <div class="row">
            <div class="field-wrap">
              <input type="number" placeholder="Quantidade *" v-model="book.quantity" required autocomplete="off"/>
            </div>
            <div class="field-wrap">
              <input type="number" placeholder="Preço *" v-model="book.price" required autocomplete="off"/>
            </div>
          </div>
          <button type="submit" @click="save" class="button button-block">Cadastrar</button>
        </form>
      </div> 
       <br>
    </div> 
  </div>
</template>
<style>

.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: .5s ease;
}
.tab-group li a:hover {
  background: #179b77;
  color: #ffffff;
}
.tab-group .active a {
  background: #1ab188;
  color: #ffffff;
}

.tab-content > div:last-child {
  display: none;
}

.cad-title {
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 40px;
}

label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
}
label .req {
  margin: 2px;
  color: #1ab188;
}

label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}
label.active .req {
  opacity: 0;
}

label.highlight {
  color: #ffffff;
}

input, textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
  transition: border-color .25s ease, box-shadow .25s ease;
}
input:focus, textarea:focus {
  outline: 0;
  border-color: #1ab188;
}

textarea {
  border: 2px solid #a0b3b0;
  resize: vertical;
}

.field-wrap {
  position: relative;
  margin-bottom: 40px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
.row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.row > div:last-child {
  margin: 0;
}

.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: #1ab188;
  color: #ffffff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.button:hover, .button:focus {
  background: #179b77;
}

.button-block {
  display: block;
  width: 100%;
}

.forgot {
  margin-top: -20px;
  text-align: right;
}
</style>