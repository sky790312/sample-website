<template>
  <span
    class="logo"
    :style="{width, height}">
    {{ text }}
  </span>
</template>

<script>

export default {
  name: 'Logo',

  props: {
    width: {
      type: String,
      default () {
        return '40px'
      }
    },

    height: {
      type: String,
      default () {
        return '40px'
      }
    },

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
.logo {
  color: #000
  background-color: #fff
  border-radius: 50%
  border: 1px solid #888
  display: flex
  justify-content: center
  align-items: center
}
</style>
