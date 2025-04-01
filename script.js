// Funciones

let x = 85;
let y = 5.5;

//Operadores aritmeticos
console.log(x + y); // Suma de dos numeros
console.log(y - x); // Restad de dos numeros
console.log(x * y); // Multiplicacion de dos numeros
console.log(x / y); // Division
console.log(x % y); // Residuo de una division

// Potencias (x**potencia)
console.log(x**4); // 4096

// Raiz cuadrada
console.log(Math.sqrt(64));

/* Caracteristicas de esta funcion

Recibe parametros? Si, 2
Devuelve un valor? No, solo imprime el resultado


*/



// Funcion para calcular el producto de dos numeros
function producto(x, y) {
    console.log(x * y); // Multiplicacion de dos numeros
return x * y; // Retorna el producto de dos numeros
} // fom del producto 

producto(4,6); // 24
producto(7, 2); // 14
producto(-10, -5); // 50

// Funcion Hola Mundo

// This function prints 'Hola Mundo' to the console
function saludo(){
    console.log("Hola Mundo"); // Imprime Hola Mundo
} // fin de la funcion  

saludo(); // Llama a la funcion saludo

function saludarUsuario(nombre){
    console.log("Hola, " + nombre); // Imprime Hola + nombre
}

saludarUsuario("Juan"); // Llama a la funcion saludarUsuario con el nombre Juan
saludarUsuario("Maria"); // Llama a la funcion saludarUsuario con el nombre Maria   