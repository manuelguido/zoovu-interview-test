import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import GamePlay from './views/GamePlay.vue'
import Error404 from './views/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game_play',
      name: 'GamePlay',
      component: GamePlay,
      beforeEnter (to, from, next) {
        if (localStorage.username) {
          next()
        } else {
          next({ name: 'Home' })
        }
      }
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
