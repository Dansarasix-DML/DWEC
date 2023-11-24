/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 14
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

/**
 * @name muestraOculta
 * @param {*} id 
 * 
 * Función que muestra/oculta parrafos con enlaces
 */
function muestraOculta(id) {
    let element = document.getElementById("contenidos_"+id);
    let link = document.getElementById("enlace_"+id);

    // Usamos style para acceder al display y modificarlo
    if (element.style.display == "" || element.style.display == "block"){
        element.style.display = "none";
        link.innerHTML = "Mostrar contenidos";
    } else {
        element.style.display = "block";
        link.innerHTML = "Ocultar contenidos";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", function (event) {
            event.preventDefault();

            const parrafo = this.previousElementSibling;
            parrafo.classList.toggle("oculto");

            this.innerText = (parrafo.classList.contains("oculto"))?
            "Mostrar contenidos":
            "Ocultar contenidos";
        })

    })

    // const link1 = document.getElementById("enlace_1");
    // const link2 = document.getElementById("enlace_2");
    // const link3 = document.getElementById("enlace_3");

    // link1.addEventListener("click", function () {
    //     muestraOculta('1'); 
    //     return false;
    // })
    // link2.addEventListener("click", function () {
    //     muestraOculta('2'); 
    //     return false;
    // })
    // link3.addEventListener("click", function () {
    //     muestraOculta('3'); 
    //     return false;
    // })
})