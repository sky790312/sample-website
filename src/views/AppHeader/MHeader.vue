<template>
  <div id="m-header">
    <div class="main-wrapper">
      <span class="logo">
        logo
      </span>
      <h1 class="main-title">
        {{ currentPage }}
      </h1>
      <i class="fa fa-2x fa-bars"></i>
    </div>
    <div class="search-wrapper">
      <i-search
        class="search"
        :searchValue.sync="searchValue">
      </i-search>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
const ISearch = () => import('@/components/ISearch')

export default {
  name: 'MHeader',

  components: {
    ISearch
  },

  data () {
    return {
    }
  },

  computed: {
    currentPage () {
      return this.$route.name
    },

    ...mapGetters([
      'searchNewValue'
    ]),

    searchValue: {
      get () {
        return this.searchNewValue
      },
      set (value) {
        this.setSearchNewValue(value)
      }
    }
  },

  methods: {
    ...mapActions([
      'setSearchNewValue'
    ])
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
    @extends .flex-center
    color: $black
    background-color: $white
    border-radius: 50%
    border: 1px solid $light-gray
    width: 50px
    height: 50px
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
