import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'
Vue.component('Header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router
})
