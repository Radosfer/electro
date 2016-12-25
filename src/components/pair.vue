<template>
  <div :class="classColor">
    {{ data.name }}
    <span class="right">{{ data.value }}</span>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      data: {
        type: Object,
        required: true
      },
      color: {
        type: String,
        default: 'grey'
      }
    },
    computed: {
      classColor () {
        return {
          [this.color + '-text']: true
        }
      }
    }
  }
</script>
