'use strict'

//Arrays: Es una coleccion de tipos de datos de valores que puede tener una variable

var nombre ="Daniel Suarez";
var nombres =["Daniel", "Sebastian", "Hermes", "Edelmira"];

var lenguajes = new Array("Php","Java","Js","Html","C++","C#");

/*
var elemento = parseInt(prompt("Que elemento del array quieres",0));
if (elemento >= nombres.length) {
    
    alert("Introduce un numero correcto, menor que "+ nombres.length);
}
else
{
    alert("El usuario seleccionado es "+ nombres[elemento]);    
}
*/

document.write("<h1>Los lenguajes de programacion del 2018</h1>");
document.write("<ul>");
//Recorrer arrays
/*
for(var i =0; i<lenguajes.length;i++){
    document.write("<li>"+ lenguajes[i]+ "</li>");
}
*/
//Manera mas limpia para recorrer un array
/*
lenguajes.forEach((elemento,indice,arreglo) => {
    console.log(arreglo);
    document.write("<li>"+ indice +" - "+ elemento + "</li>");
});
*/
//Manere de recorrer arrays con el metodo for in
for(var lenguaje in lenguajes)
{
    document.write("<li>"+lenguajes[lenguaje]+ "</li>");
}
document.write("</ul>");

//Busquedas
//Con el metodo find() se busca el elemento que necesitamos del array
//Con el findIndex() se busca la posicion del array

var precios =[10,20,40,60,3];

// var buscar = lenguajes.find(lenguaje => lenguaje == "Php");


//Con el metodo some() se realiza una comparacion y tambien condiciones de lo que se necesite buscar en el array
var buscar = precios.some(precios => precios >= 10);
console.log(buscar);