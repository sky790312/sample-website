const types = {
  SET_NEWS: 'SET_NEWS'
}

const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const actions = {
  async fetchNews ({ commit }) {
    commit(types.SET_NEWS)
  }
}

const mutations = {
  SET_NEWS (state, news) {
    state.news = news
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
