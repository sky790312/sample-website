<template>
  <div id="news">
    <card class="item"></card>
    <card class="item"></card>
    <card class="item"></card>
    <button
      class="load-more"
      @click="fetchNews">
      Load More
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const Card = () => import('@/views/News/Card')

export default {
  name: 'News',

  components: {
    Card
  },

  computed: {
    ...mapGetters([
      'news'
    ])
  },

  methods: {
    ...mapActions([
      'fetchNews'
    ])
  }
}
</script>

<style lang="stylus" scoped>
#news {
  display: flex
  flex-wrap: wrap

  .card {
    width: 100%

    @media screen and (min-width: $pad-break-point) {
      margin-right: 40px
      margin-bottom: 45px
      width: 290px

      &:nth-of-type(3n) {
        margin-right: 0
      }
    }
  }

  .load-more {
    width: 100%
    background-color: $white
    border: 1px solid $light-gray
    padding: 15px 0
    margin: 0 5px
    cursor: pointer
    text-align: center

    @media screen and (min-width: $pad-break-point) {
      margin: 0
    }
  }
}
</style>
