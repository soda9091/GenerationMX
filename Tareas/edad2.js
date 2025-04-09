// Operador ternario

/**
 * El operador ternario es una forma más simple de crear una
 * estructura tipo if-else.
 * 
 * Esto sirve para cuando tenemos condiciones simples, como por ejemplo:
 * 
 * Ejercicio:
 * - Determinar si una persona es mayor de edad.
 * 
 * ¿Qué necesito saber para determinar que una persona tiene la mayoría de edad?
 * - Edad de la persona.
 * 
 * ¿Qué expresión me permite saber si una persona es mayor de edad?
 * - edad >= 18
 */

let edad = 24;

// Problema resuelto con estructura if-else
if (edad >= 18) {
    console.log(`Si tu edad es ${edad} entonces eres mayor de edad`);
} else {
    console.log(`Si tu edad es ${edad} entonces eres menor de edad`);
}

// Problema resuelto con operador ternario
let validarEdad = edad >= 18 
    ? `Si tu edad es ${edad} entonces eres mayor de edad` 
    : `Si tu edad es ${edad} entonces eres menor de edad`;

console.log(validarEdad);

////////////////

// Switch 

/*
A diferencia de if-else, switch no utiliza expresiones logicas(condiciones)
para determinar que parte del codigo o instrucciones que se encuentran
en cierta parte de la estructura se llevan a cabo, sino que
esta basado en casos (case).

*/

// Version Switch-Case del cajero ATM

switch(opcion){
    case 1:
        console.log('Opcion seleccionada #${opcion}: Transferencias');
        break;

        case 2:
            console.log('Opcion seleccionada #${opcion}: Depositos');
            break;
        case 3:
            console.log('Opcion seleccionada #${opcion}: Retiros');
            break;
        case 4:
            console.log('Opcion seleccionada #${opcion}: Consulta de saldo');
            break;

        // No existe
        default:
            console.log('Opcion seleccionada #${opcion}: No existe');
}
//Estrcutura switch que me permite imprimir el codigo de color de el color rojo, verde y azul(Formato hexadecimal)

/**Complementar el siguiente ejercicio
 * 
 * -El color ingresado debe recibirse desde un prompt
 * -Hay que desarrollar una funcion que me permita hacer el mismo proceso que 
 * llevamos a cabo anteriormente, con la finalidad de poder reutilizar 
 * el codigo desarrollado para la estructura switch
 * 
 * 
 */

// Solicitar al usuario un color y convertirlo a minúsculas
let cadenaColor = prompt("Ingresa un color (rojo, verde, azul) para conocer su valor hexadecimal: ");
cadenaColor = cadenaColor.toLowerCase();

// Función para imprimir el código hexadecimal del color ingresado
function imprimirCodigoHex(color) {
    switch (color) {
        case "rojo":
            console.log("#FF0000");
            break;

        case "verde":
            console.log("#00FF00");
            break;

        case "azul":
            console.log("#0000FF");
            break;

        default:
            console.log("Sin coincidencias");
    }
}

// Llamar a la función con el color ingresado por el usuario
imprimirCodigoHex(cadenaColor); 