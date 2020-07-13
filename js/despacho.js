var formulario = document.getElementById('formulario')

formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        var id_boleta = document.getElementById('id_boleta').value
        var total = document.getElementById('total').value
        var fecha = document.getElementById('fecha').value
        var direccion = document.getElementById('direccion').value
        var nombre = document.getElementById('nombre').value
        var apellido = document.getElementById('apellido').value
        var productosDespacho = document.getElementById('productosDespacho').value
        var codigo = document.getElementById('codigo').value
        var cantidad = document.getElementById('cantidad').value

       

        let newFormulario = {
            id_boleta: parseInt(id_boleta),
            total: parseInt(total),
            fecha: fecha,
            direccion: direccion,
            nombre: nombre,
            apellido: apellido,
            productosDespacho: productosDespacho,
            codigo: parseInt(codigo),
            cantidad: parseInt(cantidad) 


        }

        console.log(newFormulario)

        fetch('https://cors-anywhere.herokuapp.com/http://54.90.39.252/api/Despacho/enviarDespacho', {
            method: 'POST' ,
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': "aplication/json; charset=UTF-8"

            },
            body: JSON.stringify(newFormulario)

        })

            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                
            //window.location = "verificacion.html";

            })
        
               

        })

        