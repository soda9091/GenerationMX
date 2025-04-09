// Estructura de control que funciona como la interfaz de una cajera ATM

/**
 * Opciones de mi cajero
 * 
 * 1. Transferencias
 * 2. Depósitos
 * 3. Retiros
 * 4. Consulta de saldo
 * 
 * Solución al problema:
 * 
 * ¿Qué información debe recibir mi condición para determinar qué acción llevar a cabo?
 * 
 * El número de opción
 */
let opcion = prompt("Por favor, seleccione una opción (1-4): ");
opcion = Number(opcion);

// Convertir a dato string: String();
// Convertir a dato Booleano: Boolean();
if (opcion === 1) {
    // Instrucción que se ejecuta si la opción 1 es 'true'
    console.log(`Opción seleccionada es #${opcion}: Transferencias`);
} else if (opcion === 2) {
    // Instrucción que se ejecuta si la opción 2 es 'true'
    console.log(`Opción seleccionada es #${opcion}: Depósitos`);
} else if (opcion === 3) {
    // Instrucción que se ejecuta si la opción 3 es 'true'
    console.log(`Opción seleccionada es #${opcion}: Retiros`);
} else if (opcion === 4) {
    // Instrucción que se ejecuta si la opción 4 es 'true'
    console.log(`Opción seleccionada es #${opcion}: Consulta de saldo`);
} else {
    // Instrucción que se ejecuta si no se cumple ninguna de las condiciones anteriores
    console.log(`Opción seleccionada es #${opcion}: No existe`);
}

