/////// Datos y Variables

// Declarar 3 variables de tipo number
var numero1 = 10;
let numero2 = 20.5;
const numero3 = -15;

// Declarar 3 variables de tipo string
var texto1 = "Hola";
let texto2 = "Mundo";
const texto3 = "GenerationMX";

// Declarar 3 variables de tipo Boolean
var booleano1 = true;
let booleano2 = false;
const booleano3 = true;

// Declarar 3 variables de tipo Objeto
var objeto1 = { nombre: "Juan", edad: 25 };
let objeto2 = { marca: "Toyota", modelo: "Corolla" };
const objeto3 = { pais: "México", idioma: "Español" };

// Declarar 3 variables de tipo Arreglo
var arreglo1 = [1, 2, 3];
let arreglo2 = ["a", "b", "c"];
const arreglo3 = [true, false, true];

/////// Funciones

// Calcular el perímetro de un círculo
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// Calcular el área de un rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

// Calcular el cuadrado de un número
function cuadradoNumero(numero) {
    return numero * numero;
}

// Calcular la conversión de grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Calcular el valor del voltaje dadas la resistencia y la corriente
function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
}

// Calcular el volumen de una esfera
function volumenEsfera(radio) {
    return (4/3) * Math.PI * Math.pow(radio, 3);
}

// Ejemplos de uso
console.log("Perímetro del círculo:", perimetroCirculo(5)); // Ejemplo: radio = 5
console.log("Área del rectángulo:", areaRectangulo(4, 6)); // Ejemplo: base = 4, altura = 6
console.log("Cuadrado del número:", cuadradoNumero(3)); // Ejemplo: número = 3
console.log("Celsius a Fahrenheit:", celsiusAFahrenheit(25)); // Ejemplo: 25°C
console.log("Voltaje:", calcularVoltaje(10, 2)); // Ejemplo: resistencia = 10, corriente = 2
console.log("Volumen de la esfera:", volumenEsfera(3)); // Ejemplo: radio = 3