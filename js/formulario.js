var formulario = document.getElementById('formulario')

formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        var username = document.getElementById('username').value
        var password = document.getElementById('pass').value
        var direccion = document.getElementById('direccion').value
        var family_name = document.getElementById('family_name').value
        var mail = document.getElementById('mail').value
        var nombreUsuario = document.getElementById('nombreUsuario').value
        var comuna = document.getElementById('comuna').value

       

        let newFormulario = {
            name: username,
            password: password,
            address: direccion,
            family_name: family_name,
            email: mail,
            username: nombreUsuario,
            locale: comuna
                        

        }

        console.log(newFormulario)

        fetch('https://cors-anywhere.herokuapp.com/https://98pzhju8uf.execute-api.us-east-1.amazonaws.com/v1/registrosclientes', {
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
                
            //window.location = "login.html";

            })
        
               

        })

        