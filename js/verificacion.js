var formulario = document.getElementById('verificar')

formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        var username = document.getElementById('nombreUsuario').value
        var code = document.getElementById('code').value

       

        let newFormulario = {
            username: username,
            code: code
                        

        }
        console.log(newFormulario)

        fetch('https://cors-anywhere.herokuapp.com/https://98pzhju8uf.execute-api.us-east-1.amazonaws.com/v1/confirmarclientes', {
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
                
            window.location = "login.html";

            })
        
               

        })
