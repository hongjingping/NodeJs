// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
// import {sum, minus} from './util.js'
// import * as util from './util.js'

// console.log(`sum:${util.sum(3, 5)}, minus:${util.minus(10, 3)}`)
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: "../static/loading-svg/loading-bars.svg"
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // render: function (h) {
  //   return h(App)
  // }
}).$mount('#app')
