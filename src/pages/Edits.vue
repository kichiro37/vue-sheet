<template>
	<div>
    <div class="form-home">
      Form Home
      <div class="input-form">
        Nama: <input v-model="nama" placeholder="nama perusahaan" />
      </div>
      <div class="input-form">
        Sponsor
        <select v-model="sponsors" multiple>
          <option>Sarimi</option>
          <option>Indomnie</option>
          <option>Aqua</option>
          <option>Alfamart</option>
          <option>Ubig</option>
        </select>
      </div>
      <div>
        <button v-on:click="SaveHome">
          Simpan
        </button>
      </div>
    </div>
    <div class="output-home">
      Output Home
      <div class="output-body">
        <div>Nama: {{nama}}</div>
        <div>Sponsor: {{sponsors}}</div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'edits',
    data () {
      return {
        nama: null,
        sponsors: []
      }
    },
    methods: {
      SaveHome() {
        alert(`Data ${this.nama} Tersimpan`)
      }
    }
  }

</script>
<style>
.form-home {
  margin-top: 10px
}
.output-home .output-body {
  border: solid 1px red;
  padding: 50px;
  margin: 0 30%;
  text-align: left
}
</style>
