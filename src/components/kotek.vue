<template>
	<div>
		<div>
			<table bgcolor="red" align="center" width="1000"> components/Header</table>
		</div>
		<div>
			{{ home }}
		</div>
		<div>
			{{ about }}
		</div>
	</div>
</template>

<script>
	export default {
		name : 'kotek',
	data() {
    return {
      home: 'pages/Home',
      about: 'pages/About',
    }
    }
  }

</script>