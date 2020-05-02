'use strict'


function holamundo(texto) {
    var holaMundo = "Estoy dentro de la funcion";
    //Las variables locales que se crean en una funcion no se pueden usar fuera de ella
    console.log(texto);
    console.log(numero.toString());//Para convertir un numero a String
    console.log(holaMundo);
}
var numero = 12;
var texto = "Hola Mundo soy un variable global"
holamundo(texto);
//Las variables globales se pueen utilizar dentro de una funcion