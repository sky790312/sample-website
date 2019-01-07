<template>
  <div id="app-footer">
    <nav class="page-wrapper">
      <ul class="pages">
        <li
          v-for="tab in pages"
          :key="tab.name"
          :class="['page', tab.name]">
          <router-link
            class="router-link"
            :to="tab.routeConfig">
            {{ tab.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="copy-right">
      Copy right @ KevinHu
    </div>
  </div>
</template>

<script>

import { PAGES } from '@/constants'

export default {
  name: 'AppFooter',

  data () {
    return {
      pages: PAGES
    }
  }
}
</script>

<style lang="stylus" scoped>
#app-footer {
  display: flex
  justify-content center
  flex-wrap: wrap
  color: $green
  margin-top: 75px
  padding: 25px 20px 25px 36px
  border-top: 1px solid $light-gray
  border-bottom: 1px solid $light-gray

  @media screen and (min-width: $mobile-break-point) {
    justify-content space-between
  }

  .page-wrapper {
    margin-bottom: 15px

    @media screen and (min-width: $mobile-break-point) {
      margin-bottom: 0
    }
  }

  .pages {
    display: flex

    .page {
      font-weight: bold
      padding: 0 15px
      &:not(:last-child) {
        border-right: 1px solid $dark-gray
      }
    }
  }

  .copy-right {
    color: $dark-gray
  }

  .router-link {
    color: $green
  }
}
</style>
