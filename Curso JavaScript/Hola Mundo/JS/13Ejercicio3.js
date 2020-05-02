'use strict'

/*Hacer un programa que muestre todos los numeros entre sdos numeros introducidos por el usuario */
var num1 = parseInt(prompt("Instroduce el primero numero",0));
var num2 = parseInt(prompt("Instroduce el segundo numero",0));

document.write("<h1>De "+num1+" a "+num2+" estan estos numeros<br>");

for(var i=num1; i<=num2; i++)
    {
        document.write(i+"<br/>");
    }

