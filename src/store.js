import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/config/app'
// import kinvey from '@/config/kinvey'
import api from '@/config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	app_name: app.app_name,
  	api_config: api,
  	authToken: localStorage.getItem('token') || null,
  	user_stringified: localStorage.getItem('user') || "[]"
  },
  getters: {
  	authenticated: state => {
  		return state.authToken !== null
  	},
    user: state => {
      return JSON.parse(state.user_stringified)
    }
  },
  mutations: {
  	login(state, {token, user}) {
  		state.user_stringified = JSON.stringify(user)
  		state.authToken = token
  	}
  },
  actions: {
  	login(context, user_info) {
  		return new Promise((resolve, reject) => {
        user_info.grant_type = 'password';
        user_info.client_id = context.state.api_config.client_id
        user_info.client_secret = context.state.api_config.client_secret
        user_info.scope = ''

	  		axios.post(`${context.state.api_config.oauth_url}/token`, user_info)
	  			.then(res => {
            console.log(res.data)
	  			  
            let token = res.data.access_token
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

            // Get the user
            context.dispatch('getUserByToken', token)
              .then(user_res => {
                let user = user_res.data
                localStorage.setItem('user', JSON.stringify(user))
                context.commit('login', {token, user})
              })
              .catch(user_err => {
                console.log(user_err)
                localStorage.removeItem('token')
                reject(user_err)
              })


	  				resolve(res)
	  			})
	  			.catch(err => {
	  				console.log(err)
	  				localStorage.removeItem('token')
	  				reject(err)
	  			})
	  	})
  	},
    register(context, user_info) {
      return new Promise((resolve, reject) => { 
        axios.post(`${context.state.api_config.base_url}/register`, user_info)
          .then(res => {
            let token = res.data.access_token
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

            // Get the user
            context.dispatch('getUserByToken', token)
              .then(user_res => {
                let user = user_res.data
                localStorage.setItem('user', JSON.stringify(user))
                context.commit('login', {token, user})
              })
              .catch(user_err => {
                console.log(user_err)
                localStorage.removeItem('token')
                reject(user_err)
              })

              resolve(res)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    getUserByToken(context, token) {
      return new Promise((resolve, reject) => { 
        axios.get(`${context.state.api_config.base_url}/user`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(user_err)
          })
      })
    }
  }
})
