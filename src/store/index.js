import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import token from '@/common/token.js'

Vue.use(Vuex)

const urls = {
  root: '',
  api: ''
}

if (/dev/.test(process.env.NODE_ENV)) {
  urls.root += 'http://localhost:5000/'
}

urls.api += `${urls.root}api/`

export default new Vuex.Store({
  state: {
    admin: {
      email: '',
      pass: ''
    },
    auth: {
      token: ''
    },
    contact: {
      name: '',
      telephone: '',
      issue: ''
    },
    contacts: [],
    coupon: {
      code: '',
      limit: 0
    },
    coupons: [],
    knewledge: {
      branch: '',
      leaves: []
    },
    knewledges: [],
    visits: [],
    counter: []
  },
  actions: {
    login (context, login) {
      return axios.post(`${urls.root}login`, login)
    },
    sendAdmin (context, admin) {
      return axios.post(`${urls.root}admin`, admin)
    },
    sendContact (context, information) {
      return axios.post(`${urls.api}contacts`, information)
    },
    getVisits (context) {
      return axios.get(`${urls.api}visits`)
    },
    getContacts (context) {
      return axios.get(`${urls.api}contacts`)
    },
    getCoupons (context) {
      return axios.get(`${urls.api}coupons`)
    },
    sendCoupon (context, coupons) {
      return axios.post(`${urls.api}coupons`, coupons)
    },
    getFile (context, code) {
      return axios.post(`${urls.root}cv`, code)
    },
    getKnewledges (context) {
      return axios.get(`${urls.api}knewledges`)
    },
    sendKnewledge (context, knewledge) {
      return axios.post(`${urls.api}knewledges`, knewledge)
    }
  },
  mutations: {
    addLeave (state, leave) {
      state.knewledge.leaves.push(leave)
    },
    setAuthHash (state, hash) {
      state.auth.token = hash
      token.setToken(hash)
      axios.defaults.headers.common['authorization'] = hash
    },
    changeVisits (state, v) {
      state.visits = v
    },
    changeCounter (state, c) {
      state.counter = c
    },
    changeKnewledges (state, k) {
      state.knewledges = k
    },
    changeContacts (state, c) {
      state.contacts = c
    },
    changeCoupons (state, c) {
      state.coupons = c
    },
    setError (state, e) {
      state.messageError = e
    }
  },
  getters: {
    getSession (state) {
      return (state.auth.token || token.getToken())
    }
  }
})
