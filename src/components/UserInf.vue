<template>
  <div class="user-inf">
    <div>
      Nama : {{paramsUser.nama}}
    </div>
    <div>
      Deskripsi : {{paramsUser.deskripsi}}
    </div>
    <div>
      Nama Game : <span v-for="game in paramsUser.games" v-bind:key="game"> {{game}} </span>
    </div>
    <div>
      Gender : {{paramsUser.gender}}
    </div>
    <div>
      Market Place : <span v-for="market in paramsUser.markets" v-bind:key="market"> {{market}} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInf',
  props: {
    paramsUser: Object
  }
}
</script>
<style>
.user-inf {
  border: 1px solid red;
  text-align: left;
  padding: 20px
}
</style>
