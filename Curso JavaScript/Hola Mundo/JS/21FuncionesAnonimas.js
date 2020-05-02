'use strict'

//Funciones anonimas: Una funcion que no tiene nombre y se puede guardar dentro de una variable

function sumame(numero1,numero2,sumarYmuestra,sumarPorDos) {
    var sumar = numero1 + numero2;
    sumarYmuestra(sumar);
    sumarPorDos(sumar);
    
    return sumar;
}
//Se recojen los parametros y se crea la primer funcion anonima que se uilizara por el campo sumaYmuestra
//Se  crea la segunda funcion que sera utilizada por el parametro sumarPorDos
//Una vez creados, en la funcion sumame se utilizan los parametros para recojer los datos y usarlos con la variable sumar
sumame(11,2,function(dato) {
    console.log("La suma es: ",dato)
}, function (dato) {
    console.log("La suma multiplicada p or dos",(dato*2));
});

//Funciones Flecha
//Solamente se le quita la palabra function y tambien los parentesis del parametros, en su lugar se le agrega una flecha a la derecha
sumame(15,4,dato=> {
    console.log("La suma es: ",dato)
}, dato => {
    console.log("La suma multiplicada p or dos",(dato*2));
});


/*
function operacion(sumar,resultado) {
    var suma = 2+3;
    sumar(suma);
    resultado(suma);

    return suma;
    
}

operacion(function(sumar)
{
    console.log(sumar*2);
}, resultado =>{
    console.log(resultado);
});
*/