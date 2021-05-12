import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/tentang.vue'
import Edit from './pages/Edits.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

// Axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// Router
const routes = [
	{path: '/home', component: Home},
	{path: '/about', component: About},
	{path: '/edit', component: Edit}
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

// Vuex
const store = new Vuex.Store({
	state: {
		count: 0,
		userInfo: {}
	},
	mutations: {
		increment (state) {
			state.count++
		},
		decrement (state) {
			state.count--
		},
		SaveUserInfo (state, data) {
			state.userInfo = data
		}
	},
	actions: {
		GetEmployees () {
			return new Promise ((resolve, reject) => {
				console.log('GetEmployees main.js 0')
				axios.get('/users')
				.then ( resp => {
					console.log('GetEmployees main.js 1T', resp)
					resolve(resp.data)
				})
				.catch( err => {
					console.log('GetEmployees main.js 1F', err)
					reject(err)
				})
			})
		},
		AddEmployee ({state}, employee) {
			console.log('AddEmployee 1 state', state)
			console.log('AddEmployee 0',  employee)
			return new Promise ((resolve, reject) => {
				axios.post('/users', employee)
					.then(resp => {
						console.log('AddEmployee 1T', resp)
						resolve(resp.data)
					})
					.catch(err => {
						console.log('AddEmployee 1F', err)
						reject(err)
					})
			})
		},
	}
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
