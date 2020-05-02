'use strict'

/* Hacer u programa que nos diga si un numero es par o impar
1.Ventana numero
2.Cuando no es valido que lo vuelva a pedir
*/

var number = parseInt(prompt("Instroduce un numero"),0);

while (isNaN(number)) {

  number=parseInt(prompt("Instroduce un numero"),0); 
}

if (number%2==0) {
    alert("El numero es par");
}
else
{
    alert("Es un numero impar");
}