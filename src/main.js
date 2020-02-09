import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

// Plugins
import './plugins/bootstrap-vue'
import './plugins/element.js'
import './plugins/mansory'

// DB
import * as db from './store'

let store = db.store


import App from './App.vue'
import * as route from './routes'

// CSS import



Vue.config.productionTip = false
// Import de la constante pour les routes
let router = route.router;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
