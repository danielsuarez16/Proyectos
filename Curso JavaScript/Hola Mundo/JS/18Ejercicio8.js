'use strict'

/*Calculadora

1.Pida dos numeros por pantalla
2. Si escribe mal que los vuelva a pedir
3. Luego que muestre en el body el resultado de sumar restar multiplicar y dividir
*/

var num1 = parseInt(prompt("Digite el numero",0))
var num2 = parseInt(prompt("Digite el numero",0))

while (num1 < 0 || num2 <0 || isNaN(num1)||isNaN(num2)) {
    num1 = parseInt(prompt("Digite el numero",0))
    num2 = parseInt(prompt("Digite el numero",0))   
}

var resultado ="La suma es "+ (num1+num2)+"<br/>"+
               "La resta es "+ (num1-num2)+"<br/>"+
               "La multiplicacion es "+ (num1*num2)+"<br/>"+
               "La division es "+(num1/num2)+"<br/>";

var resultado2 ="La suma es "+ (num1+num2)+"\n"+
               "La resta es "+ (num1-num2)+"\n"+
               "La multiplicacion es "+ (num1*num2)+"\n"+
               "La division es "+(num1/num2)+"\n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);