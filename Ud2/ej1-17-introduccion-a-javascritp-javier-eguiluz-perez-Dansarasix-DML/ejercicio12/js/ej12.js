/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 12
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.


/**
 * @name muestra
 * 
 * Función que modifica el nombre de la clase
 */
function muestra() {
    const element = document.getElementById("adicional");
    element.className = "visible";
    // Con className podemos modificar el nombre de la clase
    const link = document.getElementById("enlace");
    link.className = "oculto";
}

document.addEventListener("DOMContentLoaded", function () {
    let link = document.getElementById("enlace");
    link.addEventListener("click", function () {
        // if (!window.__cfRLUnblockHandlers) 
        // return false; 
        muestra(); 
        return false;
    });
})