import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import {currency} from './currency'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'

Vue.filter('currency', currency)

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

app
