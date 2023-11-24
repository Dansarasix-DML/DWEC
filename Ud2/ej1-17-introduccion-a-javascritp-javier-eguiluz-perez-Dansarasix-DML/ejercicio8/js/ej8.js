/**
 * @author Daniel Marín López
 * @version 0.05a
 * 
 * Ejercicio 8
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

{
    /**
     * Función que dice si un número es par o no
     * @param {*} numero 
     * @returns bool
     */
    function espar(numero) {

        return numero % 2 == 0;

        // if (numero % 2 == 0) {
        //     console.log(`El número ${numero} es par`);
        // } else {
        //     console.log(`El número ${numero} es impar`);
        // }
    };

    document.addEventListener("DOMContentLoaded", function () {
        const numero = document.getElementById("n");
        let comp = document.getElementById("Comprobar");
        let mensaje = document.getElementById("mensaje");
        comp.addEventListener("click", function () {
            //Lamamos a la función o Lourdes te dirá que la llames, melón.
            espar(numero.value)?
            mensaje.textContent = "El número es par":
            mensaje.textContent = "El número es impar";
        });
    });

    

    
}