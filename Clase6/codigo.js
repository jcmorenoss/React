//sentencia while
//let numero = Number (prompt("Elige un numero "))

// while (numero<10) {
//     numero++;
//     document.write(numero)
// }

//Sentencia Do - While

// do{
//     numero++;
//     document.write(numero)
// }while(numero<10)

// while(numero<1000){
//     numero++;
//     document.write(numero + "<br>")
//     if(numero==500){
//         break;
//     }
// }

/*for(let i=0;i<10;i++){
    console.log(i);
}

for(i=0;i<=10;i++){
    console.log(2*i);
}*/

// Arrays - arrelo - Matriz

let lenguajes =["Javascript","Java","Python","PHP"]

console.log(lenguajes[2]);
console.log(lenguajes.length);
console.log(lenguajes[lenguajes.length-1]);


//Metodos de Array

let animales = ["Gato","Perro","Tigre","Rata","Conejo","Gato"]

let numeros = [1,2,8,7,4,6,7,3]

animales.splice(3,2,"Gatito")
console.log(animales)

//slice()

let nuevoArray=animales.slice(0,3)
console.log(nuevoArray);

//pop() Elimina el ultimo elemento

animales.pop()
console.log(animales);

//unshift() Agrega un elemento al inicio del Array

animales.unshift("Dragon")
console.log(animales);

//shift() Eliminan el elemento al inicio del Array

/*animales.shift()
console.log(animales);*/

//push() Agrega al final del Array

/*animales.push("Cocodrilo","Dragon")
console.log(animales);*/

//find()Recorre el array y retorna la primer coincidencia

/*let nuevoArray = numeros.find(element => element<3)
console.log(nuevoArray);*/

//forEach

/*animales.forEach((element,i)=>{
    console.log(`El ${element} esta en la posicion ${i}`);
})*/

//filter() Recorre el array cre uno nuevo pero con una condicion que el usuario declara

/*let nuevoArray = animales.filter(elements=>elements==="Perro"||elements==="Gato")
console.log(nuevoArray);*/

//.map() Recorre el array y modifica para formar un nuevo array

/*let nuevoArray = numeros.map(elements =>elements * 10)
console.log(nuevoArray);*/
