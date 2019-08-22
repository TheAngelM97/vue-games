import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/config/app'
import kinvey from '@/config/kinvey'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	app_name: app.app_name,
  	kinvey_config: kinvey,
  	authToken: localStorage.getItem('token') || null,
  	user: {}
  },
  getters: {
  	authKey: state =>  {
  		return `Basic ${btoa(state.kinvey_config.api_key+':'+state.kinvey_config.master_secret)}`
  	},
  	authenticated: state => {
  		return state.authToken !== null
  	}
  },
  mutations: {
  	login(state, user) {
  		state.user = user
  		state.authToken = user._kmd.authtoken
  	}
  },
  actions: {
  	login(context, user_info) {
  		return new Promise((resolve, reject) => {
	  		axios.post(`${context.state.kinvey_config.base_url}/user/${context.state.kinvey_config.api_key}/login`, user_info, {
	  			headers: {
	  				'Authorization': context.getters.authKey,
	  				'X-Kinvey-API-Version': 3
	  			}
	  		})
	  			.then(res => {
	  				let token = res.data._kmd.authtoken
	  				localStorage.setItem('token', token)
	  				axios.defaults.headers.common['Authorization'] = token
	  				context.commit('login', res.data)

	  				resolve(res)
	  			})
	  			.catch(err => {
	  				console.log(err)
	  				localStorage.removeItem('token')
	  				reject(err)
	  			})
	  	})
  	}
  }
})
