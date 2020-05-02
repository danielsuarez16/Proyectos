'use strict'

//Bucle While

var año = 2018;


while (año!=1991) {
    //Ejecuta esto
    console.log("Estamos en el año"+ año);
    if (año==2000) {
        break;
    }
    año--;
}

//Do While

var años = 40;

do {
    alert("Solo cuando sea diferente a 20");  
    años--; 
    
} while(años>25)
