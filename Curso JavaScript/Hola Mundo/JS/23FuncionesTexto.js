'use strict'

//Transformacion de textos
//Para convertir el texto a mayusculas se utiliza el toUpperCase();
//Para convertir el texto a minusculas se utiliza el toLowerCase();
//Para contar las letras de una palabra se utiliza length();
//Parac concatenar textos se puede utilizar concat();
//Para buscar la ubicacion de un texto se utiliza indexOf();
//Para buscar la ubicacion de un texto se utiliza search();
//Utilizando el metodo substr(14,5) se digita la posicion en la que quiere arrancar la busqueda, despues cuantos digitos quiere buscar
//Para hacer una busqueda global dentro del arreglo se utiliza match(/palabra/g);
//Utilizando el metodo startsWith("") el busca al inicio del texto y devuelve un valor booleano si lo encuentra o no
//Utilizando el metodo endsWith("") el busca al final del texto y devuelve un valor booleano si lo encuentra o no
//Utilizando el metodo includes() buscar la palabra y devuelve un valor booleano si existe o no
//Utilizando el metodo charAt(23) se le escribe el numero de la posicion de la letra que s requiere buscar
//Para buscar un texto este metodo devuelve un arreglo mostrando mas detallada la busqueda match();
//Para buscar la ultima ubicacion de un texto se utiliza lastIndexOf();
var numero = 444;
var texto1 = "Bievenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var busqueda = texto1.indexOf("curso");

var dato = numero.toString();
    dato = texto1.toLowerCase();
     dato = texto2.toUpperCase();
    
// //console.log(dato);

// //Calcular longitud

 var nombre = "Daniel Suarez";

 //console.log(nombre.length);

//Concatenar - Unir textos

//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" "+ texto2);

 console.log(textoTotal);

 //Para reemplazar un texto se utiliza el metodo replace("textoOriginal","textoNuevo");
 //Para cortar el texto se utiliza el metodo slice(12) y se digita la posicion en la que quiere cortar el texto
 //El metodo split(" ") recoge todo el texto que estamos buscando y lo mete en un arreglo
 //El metodo trim(); elimina los espacios del texto al inicio y al final