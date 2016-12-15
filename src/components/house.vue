<template>
  <div>
    <span v-show="!editMode">
      <a href="#!"
         @click="selectHouse(house)">
        {{ house.title }}
      </a>
      <a href="#!" class="green-text right" @click="doEdit()"><i class="tiny material-icons">mode_edit</i></a>
    </span>
    <input class="edit"
           v-show="editMode"
           v-focus="editMode"
           :value="house.title"
           @keyup.enter="doneEdit"
           @keyup.esc="cancelEdit"
           @blur="doneEdit">
  </div>
</template>

<script type="text/babel">
  import {mapActions} from 'vuex'
  export default{
    props: ['house'],
    data () {
      return {
        editMode: false
      }
    },
    methods: {
      ...mapActions([
        'selectHouse',
        'editHouse'
      ]),
      doEdit () {
        this.editMode = !this.editMode
      },
      doneEdit (e) {
        const value = e.target.value.trim()
        const { house } = this
        if (value && this.editMode) {
          this.editStreet({house, value})
        }
        this.cancelEdit()
      },
      cancelEdit () {
        this.editMode = false
      }
    }
  }

</script>
