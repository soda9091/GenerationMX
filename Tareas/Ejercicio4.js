//// Ejercicio 4

/*
 * Realizar un programa que reciba como parámetro una categoría de películas
 * 
 * - accion
 * - drama
 * - comedia
 * - romance
 * - suspenso
 * - terror
 * 
 * Según sea la categoría que se reciba, imprimir una recomendación de película
 * de acuerdo al parámetro recibido.
 * 
 * Consideraciones: utilizar la estructura switch.
 */

function recomendacionPeliculas(categoria) {
    switch (categoria) {
        case "accion":
            console.log("Te recomendamos: Mad Max: Furia en la carretera");
            break;

        case "drama":
            console.log("Te recomendamos: El Padrino");
            break;

        case "comedia":
            console.log("Te recomendamos: La Vida es Bella");
            break;

        case "romance":
            console.log("Te recomendamos: Titanic");
            break;

        case "suspenso":
            console.log("Te recomendamos: El Conjuro");
            break;

        case "terror":
            console.log("Te recomendamos: El Exorcista");
            break;

        default:
            console.log("Categoría no válida. Por favor, elige entre: accion, drama, comedia, romance, suspenso, terror.");
    }
}

// Solicitar al usuario la categoría
const categoria = prompt("Ingresa la categoría que te gustaría visitar (accion, drama, comedia, romance, suspenso, terror):").toLowerCase();

// Llamar a la función recomendacionPeliculas
recomendacionPeliculas(categoria);
