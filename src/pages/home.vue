<template>
	<div class="home">
		pages/Home
		<button v-on:click="addCount"> add </button>
		<button v-on:click="minusCount"> kurang </button>
		{{ count }}
		<UserInf/>
	</div>
</template>

<script>
	import UserInf from '../components/UserInf.vue'
	export default {
		name : 'home',

	components: {
		UserInf
	},
	computed: {
		count () {
			return this.$store.state.count
		}
	},
	methods: {
		addCount() {
			this.$store.commit('increment')
		},
		minusCount() {
			this.$store.commit('decrement')
		}
	}
  }
</script>

<style>
.home{
	margin-top:10px;
}
</style>