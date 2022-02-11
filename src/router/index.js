import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import ListCate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // path 表示要匹配的 hash 地址,component 表示要展示的路由组件
      name: 'index', // name就相当于给你的path取个别名// redirect: '/home',
      component: Index,
      children: [{
        path: 'home',
        component: Home
      },
      {
        path: 'artists',
        component: Artists
      },
      {
        path: 'listcate',
        component: ListCate
      },
      {
        path: 'ucenter',
        component: Ucenter
      },
      {
        path: 'search',
        component: Search
      }
      ]

    }
  ]
})
