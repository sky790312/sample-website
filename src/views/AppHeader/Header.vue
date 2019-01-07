<template>
  <div id="header">
    <logo
      class="logo"
      :width="logo.width"
      :height="logo.height">
    </logo>
    <div class="main-menu-wrapper">
      <nav class="page-tabs-wrapper">
        <ul class="page-tabs">
          <li
            v-for="tab in pageTabs"
            :key="tab.name"
            class="page-tab">
            <!-- <router-link
              :to="tab.routeConfig">
              {{ tab.name }}
            </router-link> -->
            {{ tab.name }}
          </li>
        </ul>
      </nav>
      <i-search
        class="search"
        :searchValue="searchValue"
        @updateSearchValue="searchValue = $event">
      </i-search>
    </div>
  </div>
</template>

<script>

import { PAGES } from '@/constants'

const Logo = () => import('@/components/Logo')
const ISearch = () => import('@/components/ISearch')

export default {
  name: 'Header',

  components: {
    Logo,
    ISearch
  },

  data () {
    return {
      searchValue: '',
      logo: {
        width: '120px',
        height: '120px'
      },
      pageTabs: PAGES
    }
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
    flex: 0 0 120px
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
    width: 280px
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
