import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/tentang.vue'
import Edits from './pages/Edits.vue'

Vue.use(VueRouter)

const routes = [
	{path: '/home', component: Home},
	{path: '/about', component: About},
	{path: '/edits', component: Edits},
]

const router = new VueRouter({
	routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
