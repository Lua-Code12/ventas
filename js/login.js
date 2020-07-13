var loginForm = document.getElementById('loginForm')

loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        var user = document.getElementById ('username').value
        var password = document.getElementById('password').value

        let newLogin = {
            username: user,
            password: password

        }
        console.log(newLogin)

        fetch('https://cors-anywhere.herokuapp.com/https://98pzhju8uf.execute-api.us-east-1.amazonaws.com/v1/loginclientes', {
            method: 'POST' ,
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': "aplication/json; charset=UTF-8"

            },
            body: JSON.stringify(newLogin)

        })

            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json();
            })
            .then(function (data) {
                console.log(data)



                window.location = "catalogo.html";
            })
        })







