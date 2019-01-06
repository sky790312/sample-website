<template>
  <div id="news">
    <card class="item"></card>
    <card class="item"></card>
    <card class="item"></card>
  </div>
</template>

<script>
const Card = () => import('@/views/News/Card')

export default {
  name: 'News',

  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>
#news {
  display: flex
  flex-wrap: wrap

  .card {
    width: 100%

    @media screen and (min-width: $mobile-break-point) {
      margin-right: 40px
      margin-bottom: 45px
      width: 324px
    }

    @media screen and (min-width: $pad-break-point) {
      width: 303px

      &:nth-of-type(3n) {
        margin-right: 0
      }
    }
  }
}
</style>
