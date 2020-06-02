// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import VueRouter from 'vue-router'

/* eslint-disable no-new */

Vue.use(VueResource)
const routes = [
  { path: '/goods', name: 'goods', component: goods },
  { path: '/ratings', name: 'ratings', component: ratings },
  { path: '/seller', name: 'seller', component: seller }
]
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  el: '#app',
  VueResource,
  template: '<App/>',
  components: {
    App,
    VueRouter,
    VueResource
  }
})
