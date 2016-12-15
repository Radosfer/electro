<template>
  <div>
    <span v-show="!editMode">
      <a href="#!"
         @click="selectStreet(street)">
        {{ street.title }}
      </a>
      <a href="#!" class="green-text right" @click="doEdit()"><i class="tiny material-icons">mode_edit</i></a>
    </span>
    <input class="edit"
           v-show="editMode"
           v-focus="editMode"
           :value="street.title"
           @keyup.enter="doneEdit"
           @keyup.esc="cancelEdit"
           @blur="doneEdit">
  </div>
</template>

<script type="text/babel">
  import {mapActions} from 'vuex'
  export default{
    props: ['street'],
    data () {
      return {
        editMode: false
      }
    },
    methods: {
      ...mapActions([
        'selectStreet',
        'editStreet'
      ]),
      doEdit () {
        this.editMode = !this.editMode
      },
      doneEdit (e) {
        const value = e.target.value.trim()
        const { street } = this
        if (value && this.editMode) {
          this.editStreet({street, value})
          this.selectStreet(street)
        }
        this.cancelEdit()
      },
      cancelEdit () {
        this.editMode = false
      }
    }
  }

</script>
