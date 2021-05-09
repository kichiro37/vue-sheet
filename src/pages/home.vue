<template>
	<div>
		pages/Home
    {{ count }}
    <UserInf />
    <button v-on:click="addCount"> add </button>
	</div>
</template>

<script>
  import UserInf from '../components/UserInf.vue'
	export default {
		name: 'home',
    components: {
      UserInf
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      addCount () {
        this.$store.commit('increment')
      }
    }
  }

</script>
