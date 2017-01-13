<template>
  <div class="row">
    <div class="col s12">
      <div class="card-panel">
        <h5>
          Дома
          <a href="#!" class="green-text right" @click="doEdit()"><i class="tiny material-icons">add</i></a>
        </h5>
        <div class="row" v-show="loaded">
          <div class="col s6" v-if="!editMode" v-for="p in houses" :class="{active: p === current}"
               transition="fade">

            <house :house="p"></house>
          </div>
        </div>
        <spinner :loaded="loaded"></spinner>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import {mapGetters, mapActions} from 'vuex'
  import Spinner from './Spinner.vue'
  import house from './house.vue'
  import crud from '../mixin/crud'
  export default {
    mixins: [crud],
    computed: mapGetters({
      houses: 'allHouses',
      loaded: 'loadedHouse',
      current: 'currentHouse'
    }),
    methods: {
      ...mapActions([
        'selectHouse'
      ]),
      doneEdit (e) {
        // const value = e.target.value.trim()
        // if (value && this.editMode) {
        //   this.addStreet(value)
        // }
        // this.cancelEdit()
      }
    },
    components: {Spinner, house}
  }

</script>

<style lang="scss" type="text/scss">
  .active {
    a {
      color: #fff;
    }
  }

  .fade-transition {
    opacity: 1;
    transition: all .45s linear;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }

</style>
