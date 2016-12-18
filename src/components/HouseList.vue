<template>
  <div>
    <ul class="collection with-header z-depth-2 hoverable" v-show="loaded">
      <li class="collection-header">
        <h5>
          <i class="small material-icons teal-text">store</i>
          Дома
          <a href="#!" class="green-text right" @click="doEdit()"><i class="tiny material-icons">add</i></a>
        </h5>
      </li>
      <li class="collection-item" v-if="!editMode" v-for="p in houses" :class="{active: p === current}"
      transition="fade">
      <house :house="p"></house>
      </li>
    </ul>
    <spinner :loaded="loaded"></spinner>
  </div>
</template>

<script type="text/babel">
  import {mapGetters, mapActions} from 'vuex'
  import Spinner from './Spinner.vue'
  import house from './house.vue'
  export default {
    data () {
      return {
        editMode: false
      }
    },
    computed: mapGetters({
      houses: 'allHouses',
      loaded: 'loadedHouse',
      current: 'currentHouse'
    }),
    methods: {
      ...mapActions([
        'selectHouse'
      ]),
      doEdit () {
        this.editMode = !this.editMode
      },
      doneEdit (e) {
        // const value = e.target.value.trim()
        // if (value && this.editMode) {
        //   this.addStreet(value)
        // }
        // this.cancelEdit()
      },
      cancelEdit () {
        this.editMode = false
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
