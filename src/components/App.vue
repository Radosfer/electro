<template>
  <div id="app">
    <h1 class="header">Shopping Cart Example</h1>
    <div class="row">
      <div class="col s8">
        <h2 class="header">Products</h2>
        <product-list></product-list>
      </div>
      <div class="col s4">
        <cart></cart>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductList from './ProductList.vue'
  import Cart from './Cart.vue'
  export default {
    components: {ProductList, Cart}
  }
</script>