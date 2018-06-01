import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Event from './views/Event.vue'
import Books from './views/Books.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})