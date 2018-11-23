import Vue from 'vue'
import Router from 'vue-router'
import CoverPage from '@/views/coverpage'
import Login from '@/views/login'
import Admin from '@/views/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coverpage',
      component: CoverPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
