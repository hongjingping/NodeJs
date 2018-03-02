import Vue from 'vue'
import Router from 'vue-router'
import Goodslist from './../views/Goodslist.vue'
import Title from '@/views/Title.vue'
import Image from '@/views/Image.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goodslist',
      component: Goodslist,
      children: [
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    }
  ]
})
