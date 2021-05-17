<template>
	<div>
    <button @click="$emit('delete-employee', employeeIndex)" > X </button>
			{{employeeIndex}} {{employee.id}} || {{employee.name}}
  </div>
</template>

<script>
	export default {
		name: 'Employee',
    props: {
      employee: Object,
      employeeIndex: Number
    }
}

</script>

<style>
</style>
