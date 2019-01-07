import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const News = () => import(`@/views/News`)
const Regions = () => import(`@/views/Regions`)
const Video = () => import(`@/views/Video`)
const Tv = () => import(`@/views/Tv`)

const routes = [{
  path: '/',
  redirect: '/news'
}, {
  path: '/news',
  name: 'News',
  component: News
}, {
  path: '/regions',
  name: 'Regions',
  component: Regions
}, {
  path: '/video',
  name: 'Video',
  component: Video
}, {
  path: '/tv',
  name: 'Tv',
  component: Tv
}]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL
})

export default router
