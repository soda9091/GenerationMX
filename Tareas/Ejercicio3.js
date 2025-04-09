//// Ejercicio 3
/*
* 
* Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
* de descuento correcto
* 
* Debe recibir como parametros el precio del producto
* y el codigo de descuento
* 
* Sugerencia de codigo de descuento DESCUENTO10
* 
* Consideracion: utilizar la estructura if-else
*/

function calcularDescuento(precio, codigoDescuento) {
    let descuento = 0.1; // 10% de descuento
    let precioFinal = precio; // Inicializar el precio final con el precio original

    if (codigoDescuento === "DESCUENTO10") {
        precioFinal = precio - (precio * descuento); // Aplicar el descuento
    }

    return precioFinal; // Retornar el precio final
}