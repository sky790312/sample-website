import { NewsServer } from '@/api/news'

const types = {
  SET_TOTAL_PAGE: 'SET_TOTAL_PAGE',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  ADD_NEWS: 'ADD_NEWS',
  SET_SERACH_NEW_VALUE: 'SET_SERACH_NEW_VALUE'
}

const state = {
  totalPage: 99,
  currentPage: 0,
  news: [],
  searchNewValue: ''
}

const getters = {
  totalPage: state => state.totalPage,
  currentPage: state => state.currentPage,
  news: state => state.news,
  searchNewValue: state => state.searchNewValue
}

const actions = {
  async fetchNews ({ commit, getters }) {
    const totalPage = getters.totalPage
    const currentPage = getters.currentPage
    if (currentPage === totalPage) {
      return
    }

    const nextPage = currentPage + 1
    const resp = await NewsServer.get(nextPage)
    // const news = resp.news.map(newItem => ({ ...newItem, updatedAt: new Date(newItem.updatedAt) }))
    commit(types.ADD_NEWS, resp.news)
    commit(types.SET_CURRENT_PAGE, resp.currentPage)
    commit(types.SET_TOTAL_PAGE, resp.totalPage)
  },

  setSearchNewValue ({ commit }, searchNewValue) {
    commit(types.SET_SERACH_NEW_VALUE, searchNewValue)
  }
}

const mutations = {
  [types.SET_TOTAL_PAGE] (state, totalPage) {
    state.totalPage = totalPage
  },

  [types.SET_CURRENT_PAGE] (state, currentPage) {
    state.currentPage = currentPage
  },

  [types.ADD_NEWS] (state, news) {
    state.news = state.news.concat(...news)
  },

  [types.SET_SERACH_NEW_VALUE] (state, searchNewValue) {
    state.searchNewValue = searchNewValue
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
