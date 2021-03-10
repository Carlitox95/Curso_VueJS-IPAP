<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello-world/>
    <br>
    <h1>Componentes de la Aplicacion</h1>
    <br>
    <button class="boton"><router-link to="/formulario">Formulario de Datos</router-link></button>
    <br>
    <button class="boton"><router-link to="/api">Conexion Api de Datos</router-link></button>
    <br>
    <button class="boton"><router-link to="/almacenamiento">Almacenamiento</router-link></button>


    <br>
    <div id="aviso">
    <center><p class="aviso">Muestro el contenido de los componentes , porque no me funcionan bien las rutas</p></center>
     <br>
     <Formulario/>
     <br>
     <ConexionApi/>
     <br>
     <AlmacenamientoDatos/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/Formulario.vue'
import ConexionApi from './components/ConexionApi.vue'
import AlmacenamientoDatos from './components/AlmacenamientoDatos.vue'
export default {
  components: { HelloWorld, Formulario, ConexionApi, AlmacenamientoDatos },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aviso {
 background-color: rebeccapurple;
 color:crimson;
 font-size: 18px;
 border-radius: 24px 24px 24px 24px;
 border: 2px solid brown;
 height: 100px;
 width: 50%;
 padding-top:40px;
}
.boton {
 padding-bottom: 5px;
 margin-bottom: 15px;
 border-radius: 24px 24px 24px 24px;
}
a {
 text-decoration-line: inherit;

}

</style>
