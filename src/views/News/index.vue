<template>
  <div id="news">
    <card
      v-for="newItem in filterBy(news, sort, filter)"
      :key="newItem.name"
      class="item"
      :title="newItem.title"
      :desc="newItem.desc"
      :imageUrl="newItem.imageUrl"
      :updatedAt="newItem.updatedAt">
    </card>
    <button
      v-if="shouldShowLoadMore"
      class="load-more"
      @click="handleFetchNews">
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

  data () {
    return {
      isLoading: false
    }
  },

  computed: {
    ...mapGetters([
      'searchNewValue',
      'totalPage',
      'currentPage',
      'news'
    ]),

    shouldShowLoadMore () {
      return this.totalPage > this.currentPage
    },

    sort () {
      return {
        key: 'title',
        order: 'title'
      }
    },

    filter () {
      return {
        keys: ['title', 'desc'],
        value: this.searchNewValue
      }
    }
  },

  methods: {
    ...mapActions([
      'fetchNews'
    ]),

    handleFetchNews () {
      this.isLoading = false
      this.fetchNews()
        .then(() => {
          this.isLoading = true
        })
        .catch(() => {
          this.isLoading = true
        })
    }
  },

  mounted () {
    this.handleFetchNews()
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
