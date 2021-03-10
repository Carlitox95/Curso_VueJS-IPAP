<template>
 <center>
    <div class="contenedorApi">
     <h2>{{ mensaje }}</h2>
     <br>
     <h3 class="tituloContenedor">Listado de Precio de Bitcoin</h3>
        <div v-for="currency in info" v-bind:key="currency" class="currency">
         {{ currency.description }}:
         <span class="lighten">
         <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}</span>
        </div>
    </div>
    <br>
</center>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  el: '#app',
  data () {
    return {
      mensaje: 'Componente para Conectarme con la Api',
      info: null
    }
  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contenedorApi {
  background-color: lightgreen;
  color: aliceblue;
  width: 80%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 24px 24px 24px 24px;
  word-wrap: break-word;
}

.tituloContenedor{
 border-bottom: 2px solid steelblue;
 width: 350px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
label {
 color: aliceblue;
}
input,select {
  margin-left: 30px;
  border-radius: 24px 24px 24px 24px;
}
</style>
