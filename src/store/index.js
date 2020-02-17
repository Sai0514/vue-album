import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    albums: null
  },
  mutations: {
    setUser (state, val) {
      state.user = val
    },
    setAlbums (state, val) {
      state.albums = val
    }
  },
  actions: {
  },
  modules: {
  }
})
