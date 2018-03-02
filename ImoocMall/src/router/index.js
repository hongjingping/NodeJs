import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from './../views/Goodslist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'Goodslist',
      component: Goodslist
    }
  ]
})
