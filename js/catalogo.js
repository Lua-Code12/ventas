const tabla = document.querySelector('#contenido tbody');



function cargarTabla(){
    fetch('https://cors-anywhere.herokuapp.com/http://54.90.39.252/api/Producto')     
    .then(checkStatus)
    .then(respuesta => respuesta.json())
    .then(productos => {
        productos.forEach(producto => {
            const row = document.createElement('tr');
            row.innerHTML += `  
            <td class="marc">${producto.marca}</td>
            <td class="model">${producto.modelo}</td>
            <td class="cat">${producto.tipo_Producto}</td>
            <td class="cantdisp">${producto.stock}</td>
            <td class="price">${producto.precio}</td>
            <td><a href="" class="btn btn-block btn-primary agregar-carrito" data-id="${producto.codigo}">Comprar</a>
            `;
            tabla.appendChild(row);
            console.log(producto)
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