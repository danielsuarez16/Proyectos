'use strict'

// Parametros de REST y SPREAD

//REST (...nomrbreDelParametro, Asi se pueden capturar multiples datos en ese parametro)

function listadoFrutas(fruta1,fruta2, ...restodeFrutas) {
    console.log("Fruta1: ",fruta1);
    console.log("Fruta2: ",fruta2);
    console.log(restodeFrutas);
    
}
listadoFrutas("Naranja","Manzana","Pera","Banano","Sandia","Fresa");

var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas,"Pera","Banano","Sandia","Fresa");