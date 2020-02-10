import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'

Vue.use(VueRouter)


const routes = [
  { 
    path: '/',
    component: Home,
    meta: {
      title: 'Marius DAMIEN'
    }
  },
  { 
    path: '/projets',
    component: require('./components/Projects.vue').default,
    meta: {
      title: 'Mes projets'
    }
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})