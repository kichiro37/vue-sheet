<template>
	<div id="kotak">
		components/Header<br>
		<router-link to="/home">Home </router-link>
		<router-link to="/about">About </router-link>
		<router-link to="/edits">Edits </router-link>
		<router-link to="/task">Task</router-link>
	</div>
</template>

<script>
	export default {
		name : 'header'
    }

</script>

<style>
#kotak {
  background-color: red;
}
</style>
