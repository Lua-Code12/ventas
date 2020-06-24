//Añadir producto al carrito
comprarProducto(e){
    e.preventDefault();
    //Delegado para agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        //Enviamos el producto seleccionado para tomar sus datos
        this.leerDatosProducto(producto);
    }
}

//Leer datos del producto
leerDatosProducto(producto){
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

}

//muestra producto seleccionado en carrito
insertarCarrito(producto){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
        </td>
    `;
    listaProductos.appendChild(row);
   
}


 //Eliminar el producto del carrito en el DOM
 eliminarProducto(e){
    e.preventDefault();
    let producto, productoID;
    if(e.target.classList.contains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoID = producto.querySelector('a').getAttribute('data-id');
    }
 }

 