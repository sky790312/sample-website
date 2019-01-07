<template>
  <span class="app-logo">
    {{ text }}
  </span>
</template>

<script>

export default {
  name: 'Logo',

  props: {
    text: {
      type: String,
      default () {
        return 'logo'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-logo {
  @extends .flex-center
  width: 50px
  height: 50px
  color: #000
  background-color: #fff
  border-radius: 50%
  border: 1px solid #888
}
</style>
