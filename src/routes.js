import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'

Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/projets', component: require('./components/Projects.vue').default },
  // { path: '/cv', component: Projects }
  // { path: '/projets', component: Projects }
]


export const router = new VueRouter({
  mode: 'history',
  routes
})