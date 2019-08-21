import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/config/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	app_name: app.app_name
  },
  mutations: {

  },
  actions: {

  }
})
