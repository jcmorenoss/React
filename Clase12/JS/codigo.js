//array
let seleccion = ["Messi","De Paul","Martinez"]

//extraer los datos SIN DESTRUCTURING
// let dibu = seleccion[2]
// console.log(seleccion);

//extraer los datos con DESTRUCTURING

let [leo,rodrigo,dibu] = seleccion
console.log(leo)

//extraer los datos SIN DESTRUCTURING
let auto = {
    marca: "Citroen",
    modelo: "C3",
    anio: 2003
}
let miModelo = auto.modelo
console.log(auto);

//extraer los datos CON DESTRUCTURING
let {marca:marcaOK,modelo} = auto //se le puede cambiar el nombre de la variable

console.log(marcaOK);

//spread operator

let silvester = ["rambo","rambo2","rambo3"]
let stalon = ["rocky","rocky2","rocky3"]

let todas = [...silvester,...stalon,"La 6"]

console.log(todas);

//objeto

let generoAccion={
    nombreGenero: "Accion",
    popularidad:10
}

let rambo={
    titulo:"rambo",
    ranking:1,
    ...generoAccion
}

console.log(rambo);