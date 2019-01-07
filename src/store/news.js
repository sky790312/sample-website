import { NewsServer } from '@/api/news'
import { EACH_FETCH_NEWS } from '@/constants'

const types = {
  ADD_NEWS: 'ADD_NEWS'
}

const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const actions = {
  async fetchNews ({ commit, getters }) {
    const currentNews = getters.news
    const page = parseInt((currentNews / EACH_FETCH_NEWS), 10)
    const resp = await NewsServer.get(page)
    console.log(resp)
    commit(types.ADD_NEWS, resp)
  }
}

const mutations = {
  ADD_NEWS (state, news) {
    state.news = state.news.concat(...news)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
