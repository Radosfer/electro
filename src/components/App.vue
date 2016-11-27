<template>
    <div id="app">
        <h1 class="header">Electra</h1>
        <div class="row">
            <div class="col s2">
                <street-list></street-list>
            </div>
            <div class="col s8">
                <street-list></street-list>
            </div>
            <div class="col s2">
                <street-list></street-list>
            </div>
        </div>
        <!--<h1 class="header">Shopping Cart Example</h1>-->
        <!--<div class="row">-->
            <!--<div class="col s8">-->
                <!--<h2 class="header">Products</h2>-->
                <!--<product-list></product-list>-->
            <!--</div>-->
            <!--<div class="col s4">-->
                <!--<cart></cart>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
//  import ProductList from './ProductList.vue'
//  import Cart from './Cart.vue'
  import StreetList from './StreetList.vue'
  export default {
    components: {StreetList}
//    components: {ProductList, Cart, StreetList}
  }

</script>