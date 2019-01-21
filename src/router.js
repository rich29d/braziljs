import Vue from 'vue'
import Router from 'vue-router'
import VideosList from './views/VideosList.vue'
import VideoPlay from './views/VideoPlay.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Vídeos',
      component: VideosList
    },
    {
      path: '/play/:videoId',
      name: 'Vídeos',
      component: VideoPlay,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
