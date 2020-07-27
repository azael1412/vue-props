import Vue from 'vue'
Vue.component('hola-mundo', {
    props: ['idioma'],
    template: `<div>
                  <p v-if="idioma=='castellano'">Hola mundo</p>
                  <p v-if="idioma=='ingles'">Hello world</p>
              </div>`
  });
  Vue.component('articulos', {
    props:['datos'],
    template: `<div>
                 <table border="1">
                 <tr><td>Código</td><td>Descripción</td><td>Precio</td></tr>
                 <tr v-for="art in datos"><td>{{art.codigo}}</td><td>{{art.descripcion}}</td><td>{{art.precio}}</td></tr>
                 </table>
               </div>`
  });
new Vue({
  el: '#app',
  data: {
      datos: [{
              codigo: 1, 
              descripcion: 'papas',
              precio: 12.52
              },{
              codigo: 2, 
              descripcion: 'naranjas',
              precio: 21
              },{
              codigo: 3, 
              descripcion: 'peras',
              precio: 18.20
              }]      
    }     
  // template: '<h1>hello Vue</h1>'
})