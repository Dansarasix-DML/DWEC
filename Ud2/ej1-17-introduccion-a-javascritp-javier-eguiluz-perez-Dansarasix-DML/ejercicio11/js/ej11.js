/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 11
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

{
    let cont = 0;

    document.addEventListener("DOMContentLoaded", function () {
        const enlaces = document.querySelectorAll("a");
        const parrafos = document.querySelectorAll("p");
        const last_p = parrafos[2];
        const n_enlaces = enlaces.length
        const input_men1 = document.getElementById("mensaje1");
        const input_men2 = document.getElementById("mensaje2");
        const input_men3 = document.getElementById("mensaje3");
        const input_men4 = document.getElementById("mensaje4");
        input_men1.textContent = `a) Hay ${n_enlaces} enlaces en la página.`;
        input_men2.textContent = `b) El enlace del penúltimo es ${enlaces[n_enlaces-2].href}.`;
        enlaces.forEach(enlace => {
            if (enlace.href === "http://prueba/"){++cont;}
        });
        input_men3.textContent = `c) Hay ${cont} enlaces con http://prueba.`;
        input_men4.textContent = `d) Hay ${last_p.getElementsByTagName("a").length} enlaces en el párrafo.`
    });
    
}