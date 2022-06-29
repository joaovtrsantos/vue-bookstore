<script>
  import ListCategory from "../components/category/ListCategory.vue";
  import FormCategory from "../components/category/FormCategory.vue";

  export default {
    components: { ListCategory, FormCategory }
};
</script>
<template>
  <main>
    <FormCategory />
    <div class="div-table">
    <ListCategory />
    </div>
  </main>
</template>

<style>

  main {
    display: flex;
    flex-flow: column;
  }

  form {
    display: flex;
    justify-content: center;
    margin-top: 2%;
    height: 10%;
  }

  form > input {
    width: 30%;
    height: 60%;
    border: 0;
    border-radius: 50px 0 0 50px;
    border: 1px solid #ccc;
  }

  form > button {
    width: 6%;
    height: 60%;
    border: 0;
    border-radius: 0 50px 50px 0;
    background: rgb(2,0,36);
    color: whitesmoke;
  }
  form > button:hover {
    border-radius: 0 50px 50px 0;
    background: rgba(16,100,117,1);
    color: whitesmoke;
  }

  .div-table {
    display: flex;
    justify-content: center;
  }

  .div-table > table {
    width: 40%;
    text-align: center;
    border-spacing: 0;
  }

  .div-table > table > thead {
    background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,18,48,1) 35%, rgba(16,100,117,1) 100%);
    color: whitesmoke;
  }

  .border-rad-l {
    border-radius: 10px 0 0 0 ;
  }

  .border-rad-r {
    border-radius: 0 10px 0 0 ;
  }

  tbody {
    background: rgb(192, 244, 255);
    color: rgb(24, 22, 22);
  }
</style>
