'use strict'
//isNan, Identifica los que no son numeros


/*Programa que pia 2 nueros y nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son iguales  a cero, que vuelva a pedir el numero*/
var num1 = parseInt(prompt("Introduce el primer numero",0));
var num2 = parseInt(prompt("Introduce el segundo numero",0));

while (num1 <=0 || num2 <=0 || isNaN(num1|| isNaN(num2))) {
    num1 = parseInt(prompt("Introduce el primer numero",0));
    num2 = parseInt(prompt("Introduce el segundo numero",0));
}

if (num1==num2) {
    alert("Los numeros son iguales");
}
else if(num1 > num2)
{
    alert("El numero "+num1+" es mayor que "+num2);
}
else if(num1 < num2)
{
    alert("El numero "+num1+" es menor que "+num2);
}
else
{
    alert("Introduce numeros correctos");
}

