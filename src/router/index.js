import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Formulario from '@/components/Formulario'
import ConexionApi from '@/components/ConexionApi'
import AlmacenamientoDatos from '@/components/AlmacenamientoDatos'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/formulario', name: 'Formulario', component: Formulario},
    {path: '/api', name: 'Api', component: ConexionApi},
    {path: '/almacenamiento', name: 'Almacenamiento', component: AlmacenamientoDatos}
  ]
})
