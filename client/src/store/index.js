import { createStore } from 'vuex'

export default createStore({
  state: {
    data: undefined,
    isFetching: false
  },

  mutations: {
    setUser (state, user) {
      state.data = user
    },

    resetUser (state) {
      state.data = undefined
    }
  },

  actions: {
    login ({ commit }, data) {
      const user = data
      commit('setUser', user)
    },

    logout ({ commit }) {
      commit('resetUser')
    },

  
    
  },

  getters: {
    isLoggedIn: state => !!state.data
  }
})
