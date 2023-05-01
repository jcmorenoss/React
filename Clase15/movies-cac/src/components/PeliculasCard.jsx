import './PeliculasCard.css'

export const PeliculasCard=({pelicula})=>{

    const imgURL= `http://image.tmdb.org/t/p/w300${pelicula.poster_path}`

    return(
        <li className="movieCard">
            <img className="movieImage" src={imgURL} alt={pelicula.title} />
            <div>{pelicula.title}</div>
            

        </li>
    )
}