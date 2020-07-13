var formulario = document.getElementById('formulario')

formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        var username = document.getElementById('nombreUsuario').value
               

        let newFormulario = {
            username: username
            
                        

        }
        console.log(newFormulario)

        fetch('https://cors-anywhere.herokuapp.com/https://aqw2zt7em4.execute-api.us-east-1.amazonaws.com/v1/cambiarclaveventas', {
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
                
            //window.location = "recuperacion.html";

            })
        
               

        })
