<template>
  <div>
    <span v-show="!editMode">
      {{ street.title }},
      <a href="#!"
         @click="selectHouse(house)">
        {{ house.title }}
      </a>
      ({{ group.title }})
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
  import api from '../api/electro'
  export default{
    props: ['house'],
    data () {
      return {
        editMode: false
      }
    },
    computed: {
      street: function () {
        return api
                .getStreetById(this.house.street_id)
      },
      group: function () {
        return api
                .getGroupById(this.house.group_id)
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
