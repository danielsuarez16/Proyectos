'use strict'

/*Mostrar todos los nuero diisores de un numero introducidos en un prompt*/

var numero = parseInt(prompt("Mete un numero",1));

for(var i= 1; i <=numero; i++)
{
    if (numero%i==0) {

        console.log("Divisor "+i);  
    }
   
}