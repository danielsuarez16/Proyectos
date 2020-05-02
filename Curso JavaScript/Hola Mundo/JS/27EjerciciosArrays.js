'use strict'

//Un programa que 
/*
1. Pida 6 numeros por pantalla y los meta en un Array
2. Mostrar todos los elemtnos del array en la pagina y en la consola
3. Sacar el array ordenado y mostrarlo.
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de una valor introducido por el usuario y que diga si esta en el array ademas de su posicion.
*/
function mostrarArray(elementos,textoCustom="") {
    document.write("<h1>Contenido del Array "+textoCustom+" </h1>");
    document.write("<ul>")
    elementos.forEach((elemento,index)=>{
    document.write("<li>"+elemento+ "</li></br>");
    });   
    document.write("</ul>")
}
//Pedir 6 numeros
//var numeros = new Array(6);
var numeros = [];

for(var i =0; i <=5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero",0));
    numeros.push(parseInt(prompt("Introduce un numero",0)));
}

//Mostrar en el cuerpo de la pagina

mostrarArray(numeros);

//Ordenar y mostrar

//Funcion para ordenar los numeros
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "Orden");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Invertido");

// Cuantos elementos tiene un array
document.write("El array tiene "+ numeros.length+" elementos");

// Busqueda

var busqueda = parseInt(prompt("Busca un numero",0))

var posicion = numeros.findIndex(numero => numero== busqueda);

if (posicion && posicion != -1) {
    document.write("<hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la bsusqueda "+posicion+"</h1></hr>")   
}
else
{
    document.write("<hr><h1>NO ENCONTRADO</h1></hr>");
}
console.log(numeros);