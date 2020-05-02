'use strict'
/*Utilizando un bule mostrar la mediay la suma de los resultados hasta que el usuario meta un umero negativo */

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo",0));
// Si el valor no es un numero entonces el valor de numero seria igual a cero
    if (isNaN(numero)) {
        numero=0;
    }//Si el numero es mayor o igual a cero entonces entra a la operacion
    else if (numero>=0)
    {   //El numero se suma al valor inicial de la varibale suma, para asi seguir aumentando
        suma = suma + numero;
        //suma += numero;
        contador++;
    }
    //Se muetra el comportamiento de la suma y el contador
    console.log(suma,contador);
    //Si el numero es menor a cero entonces se cierra el bucle
} while (numero>=0)

alert("La suma de todos los numeros es"+ suma);
alert("La media de todos los numeros es "+ (suma/contador));
