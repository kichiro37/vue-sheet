<template>
	<div>
		<button v-on:click="$emit('delete-employee', employeeIndex)"> X </button>
		<button v-on:click="UpdateEmployee(employeeIndex, employee.name)"> Edit </button>
		{{employeeIndex}} || {{employee.id}} || {{employee.name}}
	</div>
</template>

<script>

export default {
  name: 'Employee',
  props: {
		employee: Object,
		employeeIndex: Number
  },
  methods: {
	UpdateEmployee(employeeIndex, name) {
		const NEW_NAME = prompt ('New Name', name)
		const params = {
			index : employeeIndex,
			name : NEW_NAME
		}
		this.$emit('update-employee', params)
	}
}
}
</script>

<style>

</style>
