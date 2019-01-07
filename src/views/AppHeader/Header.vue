<template>
  <div id="header">
    <span class="logo">
      logo
    </span>
    <div class="main-menu-wrapper">
      <nav class="page-tabs-wrapper">
        <ul class="page-tabs">
          <li
            v-for="tab in pageTabs"
            :key="tab.name"
            :class="['page-tab', tab.name]">
            <router-link
              class="router-link"
              :to="tab.routeConfig">
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <i-search
        class="search"
        :searchValue.sync="searchValue">
      </i-search>
    </div>
  </div>
</template>

<script>

import { PAGES } from '@/constants'
import { mapGetters, mapActions } from 'vuex'

const ISearch = () => import('@/components/ISearch')

export default {
  name: 'Header',

  components: {
    ISearch
  },

  data () {
    return {
      pageTabs: PAGES
    }
  },

  computed: {
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
#header {
  display: none
  color: $white
  margin-top: 20px

  @media screen and (min-width: $mobile-break-point) {
    display: flex
    align-items: center
  }

  .logo {
    @extends .flex-center
    flex: 0 0 120px
    color: $black
    background-color: $white
    border-radius: 50%
    border: 1px solid $light-gray
    width: 120px
    height: 120px
  }

  .main-menu-wrapper {
    @extends .flex-center
    flex-wrap: wrap
    margin-left: 80px
    background-color: $green

    @media screen and (min-width: $mobile-break-point) {
      padding: 20px 0
    }
    @media screen and (min-width: $pad-break-point) {
      padding: 0
    }
  }

  .page-tabs-wrapper {
    margin: 0 0 15px 15px
    @extends .flex-center

    @media screen and (min-width: $pad-break-point) {
      margin: 0
    }

    .page-tabs {
      display: flex
    }

    .page-tab {
      width: 120px
      height: 50px
      background-color: $light-green
      border-right: 1px solid $dark-green
      @extends .flex-center
    }
  }

  .search {
    width: 240px
    margin: 0 15px

    >>> .search-container {
      background-color: $light-green
      color: $white
    }

    >>> .search-input {
      color: $white

      &::placeholder {
        color: $white
      }
    }
  }
}
</style>
