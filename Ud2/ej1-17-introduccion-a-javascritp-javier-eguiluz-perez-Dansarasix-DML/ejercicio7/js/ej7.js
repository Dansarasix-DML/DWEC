/**
 * @author Daniel Marín López
 * @version 0.05a
 * 
 * Ejercicio 7
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

{
    /**
     * Función recursiva que calcula el factorial
     * @param {*} numero 
     * @returns factorial
     */
    function factorial(numero) {

        return (numero < 0)?
        "Los números negativos están prohibidos":
        (numero == 0 ? 1 : numero *= factorial(--numero));

        // if (numero == 0) {
        //     return 1;
        // } else {
        //     return numero *= factorial(--numero);
        // }        
    };
    
    document.addEventListener("DOMContentLoaded", function () {
        const n = document.getElementById("n");
        let calculo = document.getElementById("Calcular");
        let mensaje = document.getElementById("mensaje");

        calculo.addEventListener("click", function () {
            let fact = factorial(n.value);
            mensaje.textContent = (typeof(fact) == "string")?
            fact:
            `El factorial de ${n.value} es ${fact}`;
        })
    });
    
}