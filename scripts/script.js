let endpoint = 'https://apipetshop.herokuapp.com/api/articulos'

                 fetch(endpoint)
                     .then(res => res.json())
                     .then(data => {
                      this.response = data.response;
                      console.log(data.response)
                      
                      
              })

              const contenedorProductos = document.querySelector('#contenedor-productos')
              const pintarProductos = (data) => {
                  const template = document.querySelector('#template-productos').content
                  const fragment = document.createFragment()
                    console.log(template)
                  data.forEach(producto => {
                      console.log(producto)
                      template.querySelector('img').setAtribute('src', producto.imagen)

                      const clone = template.cloneNode(true)
                      fragment.appendChild(clone)
                  });
              }