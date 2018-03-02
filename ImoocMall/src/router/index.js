import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from './../views/Goodslist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods/:goodsId/user/:name',
      name: 'Goodslist',
      component: Goodslist
    }
  ]
})
