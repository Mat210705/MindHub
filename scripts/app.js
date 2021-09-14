// let endpoint = 'https://apipetshop.herokuapp.com/api/articulos'
//
//       fetch(endpoint)
//           .then(res => res.json())
//           .then(data => {
//               console.log(data)
//     })



    // cantidadPorPartido() {
    //             let juguetes = response..filter(member => member.party === "R");
    //
    // }






const app = Vue.createApp( {

     data() {
         return {
            response:{
              juguetes:[],
              farmacias:[],
              carrito:[],
            }

            }
        },
        created() {
          let endpoint = 'https://apipetshop.herokuapp.com/api/articulos'

                 fetch(endpoint)
                     .then(res => res.json())
                     .then(data => {
                      this.response = data.response;
                      this.productosFiltrados();
                      
                      
              })

        },

        methods: {
          productosFiltrados(){
           this.response.juguetes = this.response.filter(response => response.tipo === "Juguete");
           this.response.farmacias = this.response.filter(response => response.tipo === "Medicamento");

        },
          
           },


        computed: {
              
        },
})



let consol = app.mount("#app")
 