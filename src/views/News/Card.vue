<template>
  <div class="card">
    <h3 class="card-title hide-mobile">
      title
    </h3>
    <div class="card-left-wrapper">
      <img
        class="card-img"
        src="../../assets/no-image.png">
    </div>
    <div class="card-right-wrapper">
      <h3 class="card-title hide-pc">
        title
      </h3>
      <p class="card-desc">
        samkldsamkd samkldsmakdmsal kmdsaklkalsdlsa mkldsamlkdm saldmlksa sadkm
        samkldsamkd samkldsmakdmsal kmdsaklkalsdlsa mkldsamlkdm saldmlksa sadkm
        samkldsamkd samkldsmakdmsal kmdsaklkalsdlsa mkldsamlkdm saldmlksa sadkm
        samkldsamkd samkldsmakdmsal kmdsaklkalsdlsa mkldsamlkdm saldmlksa sadkm
        samkldsamkd samkldsmakdmsal kmdsaklkalsdlsa mkldsamlkdm saldmlksa sadkm
      </p>
      <div class="card-time">
        update: 2017/12/12
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="stylus" scoped>
.card {
  display: flex
  padding: 8px 10px 10px 10px
  border: 1px solid $light-gray

  @media screen and (min-width: $mobile-break-point) {
    display: block
    padding: 20px 10px 15px 10px
  }

  .card-left-wrapper {
    margin-right: 10px

    @media screen and (min-width: $mobile-break-point) {
      margin-right: 0
    }
  }

  .card-img {
    height: 160px
  }

  .card-title {
    margin: 20px 0 10px
    color: $green

    @media screen and (min-width: $mobile-break-point) {
      margin: 0 0 20px
    }
  }

  .card-desc {
    margin: 10px 0
    overflow: auto

    @media screen and (min-width: $mobile-break-point) {
      height: 200px
    }
  }

  .card-time {
    color: $light-gray
  }
}
</style>
