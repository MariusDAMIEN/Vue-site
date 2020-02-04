import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import * as route from './routes'
import './plugins/element.js'


Vue.config.productionTip = false
// Import de la constante pour les routes
let router = route.router;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
