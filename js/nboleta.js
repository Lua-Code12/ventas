var getData = function () {

    var precio = parseInt(document.getElementById("total").value)
    var userid = document.getElementById("cliente").value


    let newPost = {
        userid: userid,
        monto: precio

    }
    console.log(newPost)

    fetch('https://cors-anywhere.herokuapp.com/http://3.23.26.72:5000/sgcontable/ventas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newPost)

    })
    .then(function(response){
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json();
    })
    .then(function(data){
        console.log(data)
    }) 

}