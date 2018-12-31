import Vue from 'vue'
import Router from 'vue-router'
import CoverPage from '@/views/coverpage'
import Login from '@/views/login'
import Admin from '@/views/admin'
import AdminForm from '@/views/adminForm'
import store from '@/store'

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
      component: Admin,
      beforeEnter (to, from, next) {
        if (!store.getters.getSession) {
          next({ name: 'login' })
        } else {
          store.commit('setAuthHash', store.getters.getSession)
          next()
        }
      }
    },
    {
      path: '/creation',
      name: 'adminForm',
      component: AdminForm
    }
  ]
})
