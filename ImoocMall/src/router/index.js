import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from './../views/Goodslist.vue'
import Cart from '@/views/Cart.vue'
// import Title from '@/views/Title.vue'
// import Image from '@/views/Image.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goodslist',
      components: {
        default: Goodslist
      }
    },
    {
      path: '/cart/:cartId',
      name: 'Cart',
      component: Cart
    }
  ]
})
