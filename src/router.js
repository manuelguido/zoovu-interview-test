import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      beforeEnter(to, from, next) {
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
      redirect: '/',
    }
  ]
})
