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
  ]
})
