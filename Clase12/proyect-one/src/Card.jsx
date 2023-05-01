
import "./Card.css"
function Card({apellido,nacimiento,clubes,mundial,late}){
    let nombre ="leonel";
    return(
        <>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <small>{nacimiento}</small>
        <p>{clubes}</p>
        <p>{mundial?"Gano un mundial 🥇":"Sigue participando 💔"}</p>
        <small>{late?"La tengo ✅":"No la tengo ❌"}</small>
        </>
    )
}

export default Card