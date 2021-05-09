<template>
	<div class="form-edit">
		Form Edit
		<div class="form-input">
			Nama : 
			<input v-model="nama" placeholder="Nama Perusahaan">
		</div>
		<div class="form-input">
			Deskripsi :
			<textarea v-model="deskripsi" placeholder="Deskripsi"></textarea>
		</div>
		<div class="form-input">
			Game :
			<input type="checkbox" id="GTA" value="GTA" v-model="checkedNames">
			<label for="GTA"> GTA </label>
			<input type="checkbox" id="Dota" value="Dota" v-model="checkedNames">
			<label for="Dota"> Dota </label>
			<input type="checkbox" id="Valorant" value="Valorant" v-model="checkedNames">
			<label for="Valorant"> Valorant </label>
			<input type="checkbox" id="HS" value="HS" v-model="checkedNames">
			<label for="HS"> HS </label>
		</div>
		<div class="form-input">
			Gender :
			<input type="radio" id="male" value="Male" v-model="picked">
			<label for="male">Male</label>
			<input type="radio" id="female" value="Female" v-model="picked">
			<label for="female">Female</label>
		</div>
		<div class="form-input">
			Market Place :
			<select v-model="selected" multiple>
				<option>Steam</option>
				<option>Epic Game</option>
				<option>IGG</option>
				<option>Ocean Garden</option>
				<option>Windows</option>
			</select>
		</div>
		<div class="form-button">
			<button v-on:click="save"> SIMPAN </button>
		</div>
      <UserInf />
	</div>
</template>

<script>
	import UserInf from '../components/UserInf.vue'
	export default {
		name : 'edits',
		components: {
			UserInf,
  },
	data() {
    return {
      nama: this.$store.state.userInfo.nama || null,
      deskripsi: this.$store.state.userInfo.deskripsi || null,
      checkedNames: this.$store.state.userInfo.games || [],
      picked: this.$store.state.userInfo.gender || null,
      selected: this.$store.state.userInfo.markets || [],
      paramsInf: {},
    }
  },
  methods: {
    save() {
      alert(`Data ${this.nama} Tersimpan`)
      this.paramsInf = {
      nama: this.nama,
      deskripsi: this.deskripsi,
      games: this.checkedNames,
      gender: this.picked,
      markets: this.selected
      }

      this.$store.commit('SaveUserInfo',this.paramsInf)
    }
  }
}
</script>
<style>
.form-edit {
	margin-top:10px;
}
.form-input {
	margin-top:10px;
}
.form-button {
	margin-top:10px;
	margin-bottom:10px;
}
.output {
	margin-top: 10px;
	border: solid 1px orange;
	padding: 50px;
	margin: 0 30%;
	text-align: left;
}
</style>