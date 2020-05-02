'use srict'
//Arrays Multidimencionales, se utiliza un array dentro de otro

var categorias = ["MTB", "Ruta","FatBike","BMX"];
var bicicletas = ["Trek", "Scott", "Specialized","Canyon"];
//Con el metodo sort() se ordena el array en orden alfabetico
//bicicletas.sort();
//Con el metodo reverse() se ordena el array al reves de como lo creamos
bicicletas.reverse();
console.log(bicicletas);

var ciclismo = [categorias,bicicletas];
/*
console.log(ciclismo[0][2]);
console.log(ciclismo[1][3]);
*/
//Con el metodo push se le pueden agregar elementos a un array

//Con el metodo pop() se elimina el ultimo dato del array
/*
var elemento = "";

do {
    elemento= prompt("Introduce una marca de bicicletas");
    bicicletas.push(elemento);

} while (elemento != "Terminar");
*/

//Se busca con indexOf la posicion del elemento
var indice = bicicletas.indexOf("Canyon");
//Se realiza la condicion para que busque la posicion
if(indice >-1)
{
    //Encuentra la posicion y se le agrega el numero de campos a borrar
    bicicletas.splice(indice,1)
}
//Con el metodo join se muestra el arreglo en strin
var cambio =bicicletas.join();
//console.log(cambio);

//Convertir un string en arreglo

var textos = "texto1, texto 2, texto 3";
//Con el metodo split, se convierte en array los strings
var textos_array = textos.split(", ");

console.log(textos_array);




