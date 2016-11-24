<template>
  <div>
    <h5 class="deep-purple-text text-darken-4">Улицы</h5>
    <ul class="collection" v-show="loaded">
      <li class="collection-item" v-for="p in streets">
        <a href="#!"
           @click="selectStreet(p)">
          {{ p.title }}
        </a>
      </li>
    </ul>
    <div class="preloader-wrapper small active" v-show="!loaded">
      <div class="spinner-layer spinner-green-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters({
      streets: 'allStreets',
      loaded: 'loaded'
    }),
    methods: mapActions([
      'selectStreet'
    ]),
    created () {
      this.$store.dispatch('getAllStreets')
    }
  }
</script>