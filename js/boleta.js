var boleta = document.getElementById('boleta')

boleta.addEventListener("submit", (e) => {
        e.preventDefault();

        var nBoleta = document.getElementById('nBoleta').value
        var despacho = document.getElementById('pdespacho').value
        var codigo = document.getElementById('codigo').value
        var nombreProducto = document.getElementById('nombreProducto').value
        var descripcion = document.getElementById('descripcion').value
        var precio = document.getElementById('precio').value
               

        let newBoleta = {
            name: username,
            password: password,
            address: direccion,
            family_name: family_name,
            email: mail,
            username: nombreUsuario,
            locale: comuna
                        

        }

        console.log(newBoleta)

        fetch('https://cors-anywhere.herokuapp.com/http://3.23.26.72:5000/sgcontable/ventas', {
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


                window.location = "index.html";

            })
        })