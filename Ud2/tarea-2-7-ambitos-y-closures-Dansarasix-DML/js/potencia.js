/**
 * @author Daniel Marín López
 * @version 0.01a
 */

console.log("--Ejercicio 4--");

/**
 * @name potencia
 * @param {int} base 
 * @returns int
 * 
 * Función clousure que calcula la potencia
 */
function potencia(base) {
    return function (exp) {
        return exp**base;
    };
}

const exp2 = potencia(2);

document.addEventListener("DOMContentLoaded", function () {
    let sol = 1;
    const base = document.getElementById("baseInput");
    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', function () { 
        const exponente = parseInt(base.value);
        sol *= exp2(exponente);
        console.log(sol);
    });
})