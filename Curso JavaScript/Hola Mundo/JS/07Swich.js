'use strict'
//Switch

// 
console.log("si sirve");

var edad = 28;
var imprime = "";

switch (edad) {
    case 18:
        imprime= "Acabas de cumplir la mayoria de edad";  
        break;
    case 25:
        imprime= "Ya eres adulto";   
            break;
    case 40:
        imprime= "Crisis de los 40";   
            break;
    case 70:
        imprime= "Ya esta cucho";  
            break;
    default: 
        imprime= "Tu edad es neutra";
            break;     
            debugger;
}
console.log(edad,imprime);