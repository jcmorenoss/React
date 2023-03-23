//interacciones

/*alert("Hola Codo a Codo")

prompt("Escribe tu nombre")

confirm("Acepta los terminos y condiciones?")*/

//variables -- tipos de datos
//let - var - const

let nombre = "Amilcar";  //Cadena de texto  - STRING
let apellido = "Brusa";
let edad = 80;   // Numero  - NUMBRE
let numeroFavorito = "32";
let nombreApellido = "Gustavo Ballas";  // Lower camel case
let vive = false;    // Boleano - BOOLEAN
let campeones = ["Monzon", "Oliveras", true, 32];  //Arreglo - ARRAY

edad = "Hola";  //Reasigno

/*nombre = prompt("Escribe tu nombre")
document.write("Hola "+nombre)*/

let num1 = Number (prompt("Dame un numero")) //Todo lo que ingresa en un prompt es un String
let num2 = Number (prompt("Dame otro numero"))

document.write("El resultado de tu suma es: " + (num1+num2))

let num4 = null;    //Se puede asignar luego

const mouse = "Genius"; // No se puede reasignar su valor

//console.log(campeones)


let modulo = 21%7
document.write(modulo)
