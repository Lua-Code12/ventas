<?php

$usuario =$_POST['nombre'];
$usuario =$_POST['Apellido'];
$usuario =$_POST['direcion'];
$usuario =$_POST['mail'];
$usuario =$_POST['pass'];
$usuario =$_POST['regiones'];
$usuario =$_POST['comunas'];

if ($usuario === '' || $pass==='') {
    echo json_encode('Llena todos los campos');
}else {
    echo json_encode('Correcto: <br>Usuario:')
}   
}



