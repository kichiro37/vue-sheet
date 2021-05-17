<template>
	<div>
	<div class="tentang">
		pages/About
		<button v-on:click="GetEmployees"> Get Employees </button>
	<div class="employees-container">
		<div class="employees-inf">
			<input type="text" v-model="name" class="employees-textfield" /> 
			<input type="submit" label="add" @click="AddEmployee">
		</div>
		<div class="employees-inf" v-for="(employee, employeeIndex) in employees" v-bind:key="employee.id">
      <Employee 
        :employee="employee"
        :employeeIndex="employeeIndex"
        @delete-employee="OnDeleteEmployee"
        />
		</div>
	</div>
	</div>
</div>
</template>

<script>
import Employee from '../components/Employee.vue'
	export default {
		name : 'home',
  components: {
    Employee
  },
	data () {
		return {
			employees: [],
			name: null
		}
	},
	created () {
		this.GetEmployees()
	},
	methods: {
    OnDeleteEmployee (employeeIndex) {
      alert(employeeIndex)
      this.employees.splice(employeeIndex, 1)
    },
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
	},
	async AddEmployee () {
		try {
			const params = { 
				name: this.name
			}
			const employee = await this.$store.dispatch('AddEmployees', params)
			this.employees.push(employee)
			this.name = ''
			alert('Data Tersimpan')
		} catch (err) {
			alert('Opp Data tidak tersimpan')
		}
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
	display: flex;
	justify-content: space-between;
}
.employees-textfield {
	width: 90%
}
</style>
