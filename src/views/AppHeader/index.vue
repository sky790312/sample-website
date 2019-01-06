<template>
  <div id="app-header">
    <m-header></m-header>
    <pc-header></pc-header>
  </div>
</template>

<script>

const MHeader = () => import('@/views/AppHeader/MHeader')
const PcHeader = () => import('@/views/AppHeader/Header')
export default {
  name: 'AppHeader',

  components: {
    MHeader,
    PcHeader
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#app-header {
  margin-bottom: 40px
}
</style>
