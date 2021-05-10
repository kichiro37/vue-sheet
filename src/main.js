import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/tentang.vue'
import Edits from './pages/Edits.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

// Router
const routes = [
	{path: '/home', component: Home},
	{path: '/about', component: About},
	{path: '/edits', component: Edits},
]

const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

// Vuex
const store = new Vuex.Store({
  state: {
    count: 5,
    userInfo: {}
  },
  mutations: {
    increment (state) {
      state.count ++
    },
    SaveUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    GetEmployees () {
      return new Promise ((resolve, reject) => {
        console.log('GetEmployees main.js 0')
        axios({
          url: '/users',
          baseURL: 'https://jsonplaceholder.typicode.com'
        })
          .then( resp => {
            console.log('GetEmployees main.js 1T', resp)
            resolve(resp.data)
          })
          .catch( err => {
            console.log('GetEmployees main.js 1F', err)
            reject(err)
          })
      })
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
