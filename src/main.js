import Vue from 'vue'
import App from './App.vue'
import Tom from './controllers/tom'
import Mary from './controllers/mary'

Vue.use(Tom)
Vue.addVueReeguxController(Mary)

new Vue({
  el: '#app',
  store: Vue.$rgx,
  render: (h) => h(App)
})
