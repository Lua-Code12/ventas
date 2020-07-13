const tabla = document.querySelector('#contenido tbody');

        
function cargarTabla(){
    fetch(`https://cors-anywhere.herokuapp.com/http://3.23.26.72:5000/sgcontable/ventasexi`)
    .then(checkStatus)
    .then(respuesta => respuesta.json()) //Indicar el formato en que se desea obtener la info
    .then(ordenes => {
        ordenes.forEach(orden => {
            if (orden.userid == "Camila") {
            const row = document.createElement('tr');
            row.innerHTML +=  `
            <th>${orden.fecinic}</th>
            <td>${orden.id}</td>
            <td>${orden.monto}</td>
            <td>${orden.userid}</td>
               
            `;
            tabla.appendChild(row);
           } console.log(orden)
        });
    })
    .catch(function(error){
        console.log('Fetch fallido', error)
    })
}

cargarTabla();

function checkStatus(response) {
    if (response.ok) {
        return response;
    }

    let error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

 