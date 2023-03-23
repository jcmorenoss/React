/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

let clasificaciones = ["Marcos","Franco","Agostina","Leon","Juan Cruz","Eduardo"]
let aux=0;
/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

 function mostrarClasificacion(){
    for(i=0;i<clasificaciones.length;i++){
        console.log(clasificaciones[i]);
    }
   
 }mostrarClasificacion()

//opcional ForEach (ojo tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

function cambioPosicion() {
    for(i=0;i<clasificaciones.length;i++){
        console.log([i]);
    }
    aux=clasificaciones[2];
    clasificaciones[2]=clasificaciones[3];
    clasificaciones[3]=aux;
    
}cambioPosicion()
console.log(clasificaciones);

/* b)Eduardo es descalificado y se elimina del concurso */
clasificaciones.pop();

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

clasificaciones.unshift("Martina","Julieta")
aux=clasificaciones[0];
clasificaciones[0]=clasificaciones[2];
clasificaciones[2]=aux;

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

clasificaciones.unshift("Alicia")

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

mostrarClasificacion(console.log(clasificaciones))



