import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './routes'
import './assets/scss/style.scss'
import shared from './shared'

require('./helpers').arrayMove()

shared.install = function(){
  Object.defineProperty(Vue.prototype, '$sharedVars', {
    get () { return shared }
  })
}

Vue.use(shared);
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
