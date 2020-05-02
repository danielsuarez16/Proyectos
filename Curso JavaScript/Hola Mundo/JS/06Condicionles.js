'use strict'
//Condicionales

//Condicional IF
//Si A es igual a B haz algo
var edad = 18 ;
var nombre = "Daniel Suarez";

/*
Operadores relacionales

    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
    */

if (edad >= 18) {
    //Ejecuta esto
    console.log(nombre+" tiene "+edad+ " años"+" y Es mayor de edad");

    if (edad <= 18) {
        
        console.log("Todavia eres milenial");
    }
    else if(edad > 70)
    {
        console.log("Estas cucho");
    }
    else
    {
        console.log("Ya no eres mas milenial");
    }
}
else
{
    //Si no es asi, ejecuta esto
    console.log(nombre+" tiene "+edad+ " años"+" y Es menor de edad");
}

/* Operadores logicos 
    AND(Y): &&
    OR(O): ||
    NEGACION: !     
*/

//Negacion

var year = 2017;

if (year != 2016) {

    console.log("El año no es 2016");
}

//AND

if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era Actual");
}
else if(year>=2020)
{
    console.log("Estamos en la era futura");
}
else
{
    console.log("Estamos en la era vieja");
}

//or
if (year == 2008 || (year>=2018 && year<=2028)) {
    console.log("El año acaba en  8");
}
else
{
    console.log("Año no registrado"); 
}

