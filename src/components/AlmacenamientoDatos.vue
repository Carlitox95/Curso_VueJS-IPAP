<template>
 <center>
    <div class="contenedorAlmacenamiento" >
     <h2>Componente para Usar LocalStorage</h2>
     <h5>Listado de Nombre de Gatos</h5>
        <div v-for="(cat,n) in cats" v-bind:key="cat">
         <p><span class="cat">{{cat}}</span> <button @click="removeCat(n)">Eliminar</button></p>
        </div>
     <p><input v-model="newCat"> <button @click="addCat">Nuevo Gato</button></p>
    </div>
</center>
</template>

<script>

// eslint-disable-next-line t
/* eslint-disable */

export default {
  el: '#app',
  data () {
        return {
         cats:[],
         newCat:null
        }
    },
    mounted(){
        if(localStorage.getItem('cats')) {
            try {
             this.cats = JSON.parse(localStorage.getItem('cats'));
            } catch(e) {
             localStorage.removeItem('cats');
            }
        }
    },
    methods: {
        addCat() {
         // ensure they actually typed something
         if(!this.newCat) return;
         this.cats.push(this.newCat);
         this.newCat = '';
         this.saveCats();
        },
        removeCat(x) {
         this.cats.splice(x,1);
         this.saveCats();
        },
        saveCats() {
         let parsed = JSON.stringify(this.cats);
         localStorage.setItem('cats', parsed);
        }
    }



  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contenedorAlmacenamiento {
  background-color: steelblue;
  color: aliceblue;
  width: 80%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 24px 24px 24px 24px;
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
