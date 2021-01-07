import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

require('./v-component');

const routes = [
  { path: '/', component: Home },
  { path: '/detail/:alpha3Code', component: Detail },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router

}).$mount('#app')
