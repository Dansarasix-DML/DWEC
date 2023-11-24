/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 13
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

/**
 * @name anade
 * @param {*} num 
 * 
 * Función que añade elementos a una lista
 */
function anade(num) {
    let lista = document.getElementById("lista");

    let text = `<li>Nuevo elemento ${num}</li>`;
    // Con innerHTML concatenamos los nuevos elementos
    lista.innerHTML += text;
}

document.addEventListener("DOMContentLoaded", function () {
    let cont = 0;
    let boton = document.getElementById("boton");
    boton.addEventListener("click", function () {
        ++cont;
        anade(cont);
    })
})