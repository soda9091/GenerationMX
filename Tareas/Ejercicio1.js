//// Ejercicio 1
/*
* Desarrolla un programa que permita obtener el promedio de un/a alumno/a
* recibiendo como parámetro 4 calificaciones
* 
* Si el promedio es mayor o igual a 7, imprimir aprobado
* en el caso de que no se cumpla, imprimir reprobado
* 
* Consideraciones: utilizar la estructura if-else
*/

// Función para calcular el promedio
function promedio(a, b, c, d) {
    return (a + b + c + d) / 4; // Calcula el promedio
}

// Solicitar las calificaciones al usuario
let calificacion1 = Number(prompt("Ingresa la primera calificación:"));
let calificacion2 = Number(prompt("Ingresa la segunda calificación:"));
let calificacion3 = Number(prompt("Ingresa la tercera calificación:"));
let calificacion4 = Number(prompt("Ingresa la cuarta calificación:"));

// Calcular el promedio
let resultado = promedio(calificacion1, calificacion2, calificacion3, calificacion4);

// Imprimir el promedio
console.log(`El promedio es: ${resultado}`);

// Determinar si está aprobado o reprobado
if (resultado >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
