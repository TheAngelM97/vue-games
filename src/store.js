import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/config/app'
import kinvey from '@/config/kinvey'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	app_name: app.app_name,
  	kinvey_config: kinvey
  },
  mutations: {

  },
  actions: {

  }
})
