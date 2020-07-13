var formulario = document.getElementById('recuperacion')

formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        var username = document.getElementById('nombreUsuario').value
        var code = document.getElementById('codigo').value      
        var password = document.getElementById('pass').value


        let newFormulario = {
            username: username,
            code: code,
            password: password
        }

        console.log(newFormulario)

        fetch('https://cors-anywhere.herokuapp.com/https://98pzhju8uf.execute-api.us-east-1.amazonaws.com/v1/confirmarclaveclientes', {
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
                
            window.location = "confirmacionra.html";

            })
        
               

        })
