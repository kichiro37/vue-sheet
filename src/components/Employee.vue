<template>
	<div>
    <button @click="$emit('delete-employee', employeeIndex)" > X </button>
    <button @click="UpdateEmployee(employeeIndex)" > Edit </button>
			{{employeeIndex}} {{employee.id}} || {{employee.name}}
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
      UpdateEmployee (indexEmployee) {
        const NEW_NAME = prompt('New Name')
        const PARAMS = {
          name: NEW_NAME,
          index: indexEmployee
        }
        this.$emit('update-employee', PARAMS)
      }
    }
}

</script>

<style>
</style>
