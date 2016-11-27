<template>
  <div>
    <ul class="collection with-header z-depth-2 hoverable" v-show="loaded">
      <li class="collection-header">
        <h5>
          Улицы
          <a href="#!" class="green-text right" @click="doEdit()"><i class="tiny material-icons">mode_edit</i></a>
        </h5>
      </li>
      <li class="collection-item" v-if="!editMode" v-for="p in streets" :class="{active: p === current}"
          transition="fade">
        <a href="#!"
           @click="selectStreet(p)">
          {{ p.title }}
        </a>
      </li>
      <li class="collection-item" v-if="editMode">
        <form>
          <div class="row">
            <div class="input-field col s8">
              <input id="street" type="text" class="validate">
              <label for="street">Название</label>
            </div>
            <div class="input-field col s4">
              <button class="btn-floating waves-effect waves-light green">
                <i class="material-icons">add</i>
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>
    <spinner :loaded="loaded"></spinner>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Spinner from './Spinner.vue'
  export default {
    data () {
      return {
        editMode: false
      }
    },
    computed: mapGetters({
      streets: 'allStreets',
      loaded: 'loaded',
      current: 'current'
    }),
    methods: {
      ...mapActions([
        'selectStreet'
      ]),
      doEdit () {
        this.editMode = !this.editMode
      }
    },
    created () {
      this.$store.dispatch('getAllStreets')
    },
    components: {Spinner}
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
