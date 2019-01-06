<template>
  <div id="m-header">
    <div class="main-wrapper">
      <logo
        class="logo"
        :width="logo.width"
        :height="logo.height">
      </logo>
      <h1 class="main-title">{{ currentPage }}</h1>
      <i class="fa fa-2x fa-bars"></i>
    </div>
    <div class="search-wrapper">
      <i-search
        class="search"
        :searchValue="searchValue"
        @updateSearchValue="searchValue = $event">
      </i-search>
    </div>
  </div>
</template>

<script>

const Logo = () => import('@/components/Logo')
const ISearch = () => import('@/components/ISearch')

export default {
  name: 'MHeader',

  components: {
    Logo,
    ISearch
  },

  data () {
    return {
      searchValue: '',
      logo: {
        width: '50px',
        height: '50px'
      }
    }
  },

  computed: {
    currentPage () {
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus" scoped>
#m-header {
  color: $white

  @media screen and (min-width: $mobile-break-point) {
    display: none
  }

  .main-wrapper {
    background-color: $green
    @extends .flex-between
  }

  .logo {
    margin-left: 18px
  }

  .main-title {
    margin: 0
  }

  .fa-bars {
    margin: 15px
  }

  .search-wrapper {
    padding: 10px
    background-color: $light-gray
  }
}

</style>
