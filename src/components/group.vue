<template>
  <div>
    <span v-show="!editMode">
      <a href="#!"
         @click="selectGroup(group)">
        {{ group.title }}
      </a>
      <span class="a right">
        <a href="#!" class="green-text" @click="doEdit()"><i class="tiny material-icons">mode_edit</i></a>
        <a href="#!" class="red-text" @click="doEdit()"><i class="tiny material-icons">delete</i></a>
      </span>
    </span>
    <input class="edit"
           v-show="editMode"
           v-focus="editMode"
           :value="group.title"
           @keyup.enter="doneEdit"
           @keyup.esc="cancelEdit"
           @blur="doneEdit">
  </div>
</template>

<script type="text/babel">
  import {mapActions} from 'vuex'
  import crud from '../mixin/crud'
  export default {
    mixins: [crud],
    props: ['group'],
    methods: {
      ...mapActions([
        'selectGroup',
        'editGroup'
      ]),
      doneEdit (e) {
        const value = e.target.value.trim()
        const {group} = this
        if (value && this.editMode) {
          this.editGroup({group, value})
        }
        this.cancelEdit()
      }
    }
  }

</script>
