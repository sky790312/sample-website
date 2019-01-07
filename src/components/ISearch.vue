<template>
  <div class="i-search">
    <label for="i-search">
      <div class="search-container">
        <i class="fa fa-search"></i>
        <input
          type="text"
          id="i-search"
          class="search-input"
          placeholder="Search"
          :value="searchValue"
          @input="updateSearchValue">
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
    }
  },

  methods: {
    updateSearchValue (event) {
      this.$emit('update:searchValue', event.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>

.i-search {
  .search-container {
    display: flex
    align-items: center
    background-color: #f8f8f8
    color: #888
    border-radius: 10px
    padding: 8px 0
  }

  .search-input {
    background-color: transparent
    border-color: transparent
    color: #888
    border-bottom-right-radius: 10px
    border-top-right-radius: 10px

    &::placeholder {
      color: #888
    }

    &:focus {
      box-shadow: none
      outline: none
    }
  }

  .fa-search {
    padding-left: 10px
  }
}

</style>
