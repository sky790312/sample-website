<template>
  <div id="app" class="container">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
const AppHeader = () => import('@/views/AppHeader')
const AppFooter = () => import('@/views/AppFooter')

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="stylus">
@import '~@/stylus/index'
</style>

<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0 20px

  @media screen and (min-width: $mobile-break-point) {
    max-width: 990px
    margin: auto
  }
}
</style>
