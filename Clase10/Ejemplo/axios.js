let pagina = 1;
let sonidoPagina = "mute";
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const nPagina = document.querySelector('#numeroPagina');

// Sonido-Mute

mute.addEventListener("click", (e) => {
    video.muted = !video.muted;
    changeButtonState("mute");
});

// Botones de paginas

btnSiguiente.addEventListener('click', () => {
    if (pagina < 500) {
        pagina += 1;
        obtenerPeliculas();
    }
});

// nPagina.innerHTML = `Pagina ${pagina}`;

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        obtenerPeliculas();
    }
});

const obtenerPeliculas = async () => {
    try {
        const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular/`, {
            params: {
                // Con uso de la API_KEY
                // api_key: '4047f87b5c7f18194cb9027abda2dc48',
                lenguage: 'es-AR',
                // este es el metodo para remplazar ""&page=${pagina}" usado en fetch
                page: pagina
            },
            headers: {
                // Esto es el remplazo de la Api_key, es el uso de API Read Access Token (v4 auth) 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDQ3Zjg3YjVjN2YxODE5NGNiOTAyN2FiZGEyZGM0OCIsInN1YiI6IjY0MjU4ZDcxMzdiM2E5MDA5Nzc3ZTc1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ga_4dxx3Yh97pjaX2sEU-jJ01cKuiJt3GaCNjZH4Z08'
            }
        })

        nPagina.innerHTML = `Pagina ${respuesta.data.page}`;// En lugar de usar la variable pagina saco la info de respuesta

        if (respuesta.status === 200) {

            let peliculas = '';

            respuesta.data.results.forEach(pelicula => {

                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                    `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal');
        } else if (respuesta.status === 404) {
            console.log('La pelicula que buscas no existe');
        } else {
            console.log('Hubo un error y no sabemos que paso');
        }


    } catch (e) {
        console.log(e)
    }

}
obtenerPeliculas();




