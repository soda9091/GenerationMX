//// Ejercicio 2
/*
* Crear un programa que funcione como una calculadora simple
* que realice las operaciones aritméticas básicas
* 
*  - suma
*  - resta
*  - multiplicación
*  - división
* 
* Debe recibir como parámetros la operación a realizar y dos números.
* Dependiendo de la opción que se indique, realizar la operación correspondiente.
* 
* Consideraciones: utilizar la estructura switch.
*/

function calculadora(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            console.log(`Suma: ${num1 + num2}`); // Suma
            return num1 + num2;

        case "resta":
            console.log(`Resta: ${num1 - num2}`); // Resta
            return num1 - num2;

        case "multiplicacion":
            console.log(`Multiplicación: ${num1 * num2}`); // Multiplicación
            return num1 * num2;

        case "division":
            if (num2 === 0) {
                console.log("Error: No se puede dividir entre cero");
                return "Error: No se puede dividir entre cero";
            }
            console.log(`División: ${num1 / num2}`); // División
            return num1 / num2;

        default:
            console.log("Operación no válida"); // Manejo de error
            return "Operación no válida";
    }
}

// Solicitar al usuario la operación y los números
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicacion, division):").toLowerCase();
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));

// Llamar a la función calculadora
calculadora(operacion, num1, num2);