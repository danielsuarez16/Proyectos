'use strict'

//Plantillas de texto

var nombre = prompt("Digita tu nombre");
var apellido = prompt("Digita tu apellido");

//var texto = "Hola mi nombre es "+ nombre + " y mi apellido es "+ apellido;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Mi apellido es ${apellido}</h3>
`;

document.write(texto);

