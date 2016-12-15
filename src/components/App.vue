<template>
    <div id="app">
        <h1 class="header">Electra</h1>
        <div class="row">
            <div class="col s2">
                <street-list></street-list>
            </div>
            <div class="col s8">
                <house-list></house-list>
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

<script type="text/babel">
//  import ProductList from './ProductList.vue'
//  import Cart from './Cart.vue'
  import StreetList from './StreetList.vue'
  import HouseList from './HouseList.vue'
  export default {
    components: {
      StreetList,
      HouseList
    }
//    components: {ProductList, Cart, StreetList}
  }

</script>