<template>
  <div class="output">
    <div>
      Nama : {{paramsInf.nama}}
    </div>
    <div>
      Deskripsi : {{paramsInf.deskripsi}}
    </div>
    <div>
      Nama Game : <span v-for="game in paramsInf.games" v-bind:key="game"> {{game}} </span>
    </div>
    <div>
      Gender : {{paramsInf.gender}}
    </div>
    <div>
      Market Place : <span v-for="market in paramsInf.markets" v-bind:key="market"> {{market}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userinf',
  computed: {
    paramsInf () {
      return this.$store.state.userInfo
    }
  }
}
</script>
<style>
.output {
  margin-top: 10px;
  border: solid 1px orange;
  padding: 50px;
  margin: 0 30%;
  text-align: left;
}
</style>