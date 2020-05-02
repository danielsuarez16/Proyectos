'use strict'
/*Funciones: Es una agrupacion reutilizable de un conjunto de instrucciones */
//Parametros opcionales:  Son parametros que no son obligaorios pasarle un resultado y ya vienen inicializados

//Funciones

//Defino la funcion

function porConsola(numero1,numero2){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("*********************************");
}
function porPantalla(numero1,numero2) {
    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta: "+(numero1-numero2)+"<br/>");
    document.write("Multiplicacion: "+(numero1*numero2)+"<br/>");
    document.write("Division: "+(numero1/numero2)+"<br/>");
    document.write("*********************************");
        }
function calculadora(numero1,numero2,mostrar=false)
{
    //Conjunto de instrucciones a ejecutar
    // el return devuelve un resultados
    //return "Hola soy la Calculadora";
    if (mostrar==false) {
        porConsola(numero1,numero2);
    }
    else
    {
        porPantalla(numero1,numero2);
    }
   
    return true;
}

//Invocar o llamar a la funcion
/*for(var i = 0; i<=10;i++){
    console.log(i);
    calculadora(i,i);
}
*/
calculadora(2,4,false);
calculadora(3,5,true);
