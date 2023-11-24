/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 4
 */

/*
Mala práctica usar alert
*/

{
    let valores = [true, 5, false, "hola", "adios", 2];

    // Variables de trabajo
    let long = 0;
    let cadena = "";
    let a = 0;
    let b = 0;
    /**
     * Bucle para imprimir la cadena
     */
    valores.forEach(element => {
        if (typeof(element) == typeof("")) {
            if (element.length > long) {
                long = element.length;
                cadena = element;   
            }
        }
    });
    console.log(`La cadena larga es ${cadena}, con un total de ${long} letras`);
    /**
     * Bucle para los booleanos
     * 
     * Uso los operadores && y ==.
     */
    valores.forEach(element => {
        if (typeof(element) == typeof(false)) {
            if (element && true == true) {
                console.log("Verdad");
            } else {
                console.log("Falso");
            }
        }
    });
    /**
     * Bucle para los números
     */
    valores.forEach(element => {
        if (typeof(element) == typeof(3)) {
            if (a == 0) {
                a = element;
            } else {
                b = element;
            }
        }
    });
    console.log(`Suma: ${a + b}`);
    console.log(`Resta: ${a - b}`);
    console.log(`Producto: ${a * b}`);
    console.log(`Cociente: ${a / b}`);
    console.log(`Modulo: ${a % b}`);

}