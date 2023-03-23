/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "juan";
console.log(nuevaString)

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;
console.log(nuevoNum)

// Crea una variable booleana:
const nuevoBool = true;
console.log(nuevoBool)

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
console.log(nuevaResta)

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
console.log(nuevaMultiplicacion)

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(nuevoModulo)


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log(str)
}
devolverString("Hello")

// function suma(x, y) {
//   // "x" e "y" son números
//   // Suma "x" e "y" juntos y devuelve el valor
//   // Tu código:
//   console.log(x+y);
// }
// suma(5,9)

//Funcion flecha
let sumar = (x,y)=>{
  console.log(x+y);
}
sumar(10,10)

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  console.log(x-y);
}
resta(10,6)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x*y);
}
multiplica(3,3)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(x/y);
}
divide(10,5)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
//x===y?console.log(true):console.log(false)
console.log(x===y);
}
sonIguales(5,5)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
//str1.length===str2.length?console.log(true):console.log(false)
console.log(str1.length===String(str2).length);
}
tienenMismaLongitud("cosa",1234)

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
//num<90?console.log(true):console.log(false)
console.log(num<90);
}
menosQueNoventa(90)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  //num>50?console.log(true):console.log(false)
console.log(num>50);
}
mayorQueCincuenta(51)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
console.log(x%y);
}
obtenerResto(10,3)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
//num%2==0?console.log(true):console.log(false)
console.log(num%2===0);
}
esPar(2)


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  //num%2!=0?console.log(true):console.log(false)
console.log(num%2!==0);
}
esImpar(5)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
console.log(Math.pow(num,2))
}
elevarAlCuadrado(4)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
console.log(Math.pow(num,3))
}
elevarAlCubo(2)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
console.log(Math.pow(num,exponent))
}
elevar(3,2)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
console.log(Math.round(num));
}
redondearNumero(5.6)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  console.log(Math.ceil(num));
}
redondearHaciaArriba(9.1)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  console.log(Math.trunc(Math.random()*10));
}
numeroRandom()
numeroRandom()
numeroRandom()
numeroRandom()

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
if(numero>=1){
  console.log("Es positivo")
}else if(numero<0){
  console.log("Es negativo")
}else console.log(false);

//If ternario
(numero>0)?console.log("Es positivo"):(numero<0)?console.log("Es negativo"):console.log(false);

}

esPositivo(-1)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
console.log(str+"!")
}
agregarSimboloExclamacion("Buenos días")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
console.log("Soy "+nombre+" "+apellido);
console.log(`Hola como estas ${nombre} tu apellido es ${apellido}`);
}
combinarNombres("Juan","Moreno")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
console.log("Hola "+nombre+"!")
}
obtenerSaludo("Martin")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
console.log(alto*ancho);
}
obtenerAreaRectangulo(2,6)

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
console.log(4*lado)
}
retornarPerimetro(3)

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
console.log((base*altura)/2);
}
areaDelTriangulo(10, 8)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
console.log(euro*1.20);
}
deEuroAdolar(20)


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
if(letra.length!==1){
  console.log("Dato incorrecto, ingresaste mas de un caracter");
}else if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
  console.log("Ingresaste la letra "+letra+" Es vocal");
}else{
  console.log("Ingresaste la letra "+letra+" No es vocal");
}

}
esVocal("A".toLowerCase())