<template>
  <ul class="collection">
    <li class="collection-item" v-for="p in products">
      <p>
        {{ p.title }} - {{ p.price | currency }}
        <a href="#!" class="secondary-content btn-floating waves-effect waves-light green"
           :disabled="!p.inventory"
           @click="addToCart(p)">
          <i class="material-icons">shopping_basket</i>
        </a>
      </p>
    </li>
  </ul>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created () {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>