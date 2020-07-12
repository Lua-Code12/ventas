var loginForm = document.getElementById('loginForm')

loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        var user = doccument.getElementByName ('username').value
        var password = document.getElementByName('password').value

        let newLogin = {
            username: user,
            password: password

        }
        console.log(newLogin)

        fetch('https://cors-anywhere.herokuapp.com/https://21h97trgw3.execute-api.us-east-1.amazonaws.com/test/login', {
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



                window.location = "index.html";
            })
        })







