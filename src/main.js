import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/tentang.vue'
import Edit from './pages/Edits.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

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
	}
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
