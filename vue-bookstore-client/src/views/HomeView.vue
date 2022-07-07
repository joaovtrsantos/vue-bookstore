<script setup>
</script>

<template>
  <main>
    <h1>Welcome to JB Bookstore</h1>

    <div class="square">
      <div class="row">
        <div class="item">
          <img class="cover" src="../assets/sociedadeanel.png" alt="">
          <h2 class="title">O senhor dos Anéis</h2>
          <p class="price">79,90</p>
          <button class="btn-purchase">
            Adicionar ao carrinho
          </button>
        </div>
        <div class="item">
          <img class="cover" src="../assets/sociedadeanel.png" alt="">
          <h2 class="title">Harry Potter</h2>
          <p class="price">69,90</p>
          <button class="btn-purchase">
            Adicionar ao carrinho
          </button>
        </div>
        <div class="item">
          <img class="cover" src="../assets/sociedadeanel.png" alt="">
          <h2 class="title">Peter Pan</h2>
          <p class="price">99,90</p>
          <button class="btn-purchase">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin-top: 3%;
  text-align: center;
}

.square {
  margin: auto;
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: center;
}

.row {
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-gap: 5%;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cover {
  height: 70%;
  width: 50%;
  text-align: center;
}

.title {
  width: 51%;
}

.price {
  width: 50%;
}

.btn-purchase {
  width: 50.1%;
  background: rgb(2, 0, 36);
  color: whitesmoke;
}

.btn-purchase:hover {
  color: rgba(16, 100, 117, 1);
}
</style>