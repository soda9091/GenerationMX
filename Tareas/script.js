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

//////////////////////////

// funcion que calcula la suma de 5 numeros diferentes
function suma(x, y, z){
    return x + y + z;
}

suma(2, 5, 8);
console.log(varlorDevuelto);

// Ejemplo 2: almacenar el valor devuelto en una variable
let valorDevuelto = suma(2, 5, 8); // 15
console.log(valorDevuelto); // Imprime 15

// Ejemplo 3: utilizarlo como parametro de una funcion
function imprimirValor(valorDevuelto){
    console.log(valorDevuelto);
}
imprimirValor(suma(2, 5, 8)); // Imprime 15

// Ejemplo 4: utilizarlo en una estructura de control de flujo
if (valorDevuelto >= 5) {
    console.log("Es mayor"); //true")
} else {
    console.log("Es menor"); //false
}


///////////////

// Funciones flecha

/*

Caracteristicas de esta funcion flecha
- Se puede evitar colocar () si solo se usa un parametro.
- Se puede evitar el uso de la clausula 'return' si solo existe una operacion.
- Se puede evitar el uso de {} si solo se escribe una instruccion dentro de la funcion.

*/

// Funcion flecha que calcula el producto de dos numeros
const productoFlecha = (x, y) => {
    console.log("Resultados: "); // Multiplicacion de dos numeros
    console.log(x * y);
};

productoFlecha(4, 6); // 24

// Funcion flecha que saluda a un usuario
const saludoFlecha = usuario => console.log("Hola, " + usuario); // Imprime Hola + nombre

saludoFlecha("Magali"); // Llama a la funcion saludoFlecha con el nombre Magali