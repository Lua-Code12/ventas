var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('Envio de formulario')

     var datos = new FormData(formulario);
     
     console.log(datos)
     console.log(datos.get('nombre'))
     console.log(datos.get('Apellido'))
     console.log(datos.get('direccion'))
     console.log(datos.get('mail'))
     console.log(datos.get('pass'))
     console.log(datos.get('#regiones'))
     console.log(datos.get('#comunas'))

     fetch('post.php', {
         method: 'POST',
         body: datos
     })
     .then( res => res.json())
     .then( res => {
            console.log(data)
     })

})




