//Math
//let nombre = "hola"
console.log("Hola")
/*document.write("Hola")*/

console.log(Math.pow(2,2));
console.log(Math.round(6.4));
console.log(Math.floor(6.9));
console.log(Math.ceil(6.01));

console.log(Math.round(Math.random()*6));
console.log(Math.trunc(6.5));

//Length

let contrasena = "12345678";
                //0       1
let nombres = ["pepe","carla"];
let rol = "otro";
console.log(contrasena.length);
console.log(nombres.length);

//condicionales

if((contrasena.length<8)&&(rol==="dev")){
    console.log("Tiene que tener minimo 8 caracteres")
}else{
    console.log("Validacion OK")
}

//ternario

contrasena.length<8?console.log("Tiene que tener minimo 8 caracteres"):console.log("Validacion OK");

//switch

let semaforo = "Rojo"

switch (semaforo.toUpperCase()){
    case "ROJO":
        console.log("No puedes pasar");
        break;
    case "AMARILLO":
        console.log("Precuacion");
        break;
    case "VERDE":
        console.log("Puedes pasar");
        break;
    default:
        console.log("Color incorrecto")
}

//Funciones

function saludo(){
console.log("Hola codo a codo");
}
saludo()

function suma(num1,num2){
    console.log(num1+num2);
}
suma(50,50)
suma(10,23)
suma(85,25)