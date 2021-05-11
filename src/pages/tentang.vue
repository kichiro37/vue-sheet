<template>
	<div id="tentang">
		pages/About
    <button v-on:click="GetEmployees"> Get Employyes </button>
    <div class="employee-container">
      <div class="employee-inf">
        <input class="employee-textfield" v-model="name" placeholder="Add Employees" />
        <input type="submit" label="add" v-on:click="AddEmployee" />
      </div>
      <div class="employee-inf" v-for="employee in employees" v-bind:key="employee.id"> 
        {{ employee.id }} || {{ employee.name }}
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name : 'home',
    data () {
      return {
        employees: [],
        name: null
      }
    },
    created() {
      this.GetEmployees()
    },
    methods: {
      async AddEmployee () {
        try {
          const params = {
            name: this.name
          }
          const employee = await this.$store.dispatch('AddEmployees', params)
          this.employees.push(employee)
        } catch (err) {
          console.log(err)
        }

        this.name = null
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
      }
    }
  }

</script>
<style>
#tentang .employee-container {
  border: solid 1px black;
  text-align: left
}
#tentang .employee-inf {
  border-bottom: solid 1px black;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between
}
#tentang .employee-inf .employee-textfield {
  width: 90%
}
</style>
