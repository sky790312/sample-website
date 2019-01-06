import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const News = () => import(`@/views/News`)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/news'
  }, {
    path: '/news',
    name: 'News',
    component: News
  }]
})
