<template>
 <center>
  <div class="contenedorFormulario" >
    <h2>Componente del Formulario</h2>
    <form id="app" @submit="checkForm(e)" method="post" novalidate="true">
    <!-- Inputs -->
     <p><label for="name">Nombre</label><input id="name" v-model="name" type="text" name="name"></p>
     <p>
        <label for="movie">Película</label>
         <select id="movie" v-model="movie" name="movie">
         <option>Star Wars</option>
         <option>Titanic</option>
         <option>Dragon Ball Super Broly</option>
         <option>Naufrago</option>
        </select>
     </p>
   </form>
    <div class="mensajeFormulario">
     <p>{{ mensajeFormulario }}</p>
    </div>
  </div>
</center>
</template>

<script>
/* eslint-disable */
export default {
  el: '#app',
  data () {
    return {
      errors: [],
      name: null,
      movie: null
    }
  },
  computed: {
    mensajeFormulario: function () {
      let nombre = this.name
      let pelicula = this.movie
      if ( (nombre == null) || ( pelicula == null) ) {
        let mensaje = null
        return mensaje
      }
      else {
       let mensaje = 'Mi nombre es '+nombre+' y mi pelicula favorita es '+pelicula
       return mensaje
      }
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true
      }

      this.errors = []

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.')
      }
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contenedorFormulario {
  background-color: steelblue;
  color: aliceblue;
  width: 80%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 24px 24px 24px 24px;
}

.mensajeFormulario{
 color: aliceblue;
 font-size: 10px;
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
