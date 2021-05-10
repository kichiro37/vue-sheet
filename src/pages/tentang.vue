<template>
	<div>
	<div class="tentang">
		pages/About
		<button v-on:click="GetEmployees"> Get Employees </button>
	<div class="employees-container">
		<div class="employees-inf" v-for="employee in employees" v-bind:key="employee.id">
			{{employee.name}}
		</div>
	</div>
	</div>
</div>
</template>

<script>
	export default {
		name : 'home',

	data () {
		return {
			employees: []
		}
	},
	methods: {
		async GetEmployees () {
    console.log('GetEmployees tentang 0', this.employees)
    try {
      this.employees = await this.$store.dispatch('GetEmployees')
    } catch (err) {
      alert('error')
    }
    console.log('GetEmployees tentang 1', this.employees)
  },
  GetEmployeesThen () {
    console.log('GetEmployees tentang 0', this.employees)
     this.$store.dispatch('GetEmployees')
      .then(resp => {
        this.employees = resp
      })
      .catch(() => {
        alert('error')
      })
    console.log('GetEmployees tentang 1', this.employees)
	}
	}
}

</script>

<style>
.tentang {
	margin-top: 10px;
}
.employees-container {
	margin-top: 10px;
}
.employees-inf {
	border:solid 1px;
	margin: 0 30%;
}
</style>