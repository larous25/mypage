const token = 'my.page.token'

export default {
  getToken () {
    return window.localStorage.getItem(token)
  },

  setToken (hash) {
    window.localStorage.setItem(token, hash)
  },

  removeToken () {
    window.localStorage.removeItem(token)
  }
}
