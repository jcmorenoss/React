//funcion para cargar las peliculas
window.addEventListener("load",()=>{
    cargarPeliculas()
})

let pagina = 1; //variable para continuar la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior")
let btnSiguiente =  document.querySelector("#btnSiguiente")
const numPagina = document.querySelector("#numPaginas")

//Funcion anterior

btnAnterior.addEventListener("click",()=>{
    (pagina>1)?pagina-=1:false;
    //Llamar a la funcion que carga las paginas
    cargarPeliculas()

    
})



btnSiguiente.addEventListener("click",()=>{
    (pagina<=500)?pagina+=1:false;
    //Llamar a la funcion que carga las paginas
    cargarPeliculas()
    
})

//funcion que cargue las peliculas

const cargarPeliculas = async ()=>{
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8031057bbf370ea81fa3de10ec5415ab&language=es-MX&page=${pagina}`)
        numPagina.innerHTML=`Pagina ${pagina}`;
        if(respuesta.status === 200){
            let datos =await respuesta.json();
            let peliculas = "";
            console.log(datos.page)
            datos.results.forEach((pelicula) => {
                peliculas+=`<div class="pelicula">
                <img class="poster" src="http://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <h3 class="titulo">${pelicula.title}</h3>
                </div>`
            });

            document.querySelector(".contenedor").innerHTML = peliculas
        }else if (respuesta === 400){
            console.log("error 404 nos vemos en otro lugar");
        }
    } catch (error) {
        console.log(error);
    }
}