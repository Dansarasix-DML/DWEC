/**
 * @author Daniel Marín López
 * @version 0.05a
 * 
 * Ejercicio 10
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.

{
    document.addEventListener("DOMContentLoaded", function () {
        const cadena = document.getElementById("cad");
        let comp = document.getElementById("Comprobar");
        let mensaje = document.getElementById("mensaje");

        comp.addEventListener("click", function () {
            //Lamamos a la función o Lourdes te dirá que la llames, melón.
            mensaje.textContent = palindromo(cadena.value);
        })
    });
    
    /**
     * @name invert_cad
     * @param {*} cadena 
     * @returns invertida
     * 
     * Función que devuelve una cadena invertida.
     */
    function invert_cad(cadena) {
        let invertida = "";
        // for (let index = cadena.length - 1; index >= 0; index--) {
        //     invertida += cadena[index];
        // }
        // for (let caracter of cadena) {
        //     invertida = caracter + invertida;
        // }
        Array.from(cadena).forEach(element => {
            invertida = element + invertida;
        });

        return invertida;
    };
    /**
     * @name palindromo
     * @param {*} cadena 
     * 
     * @returns mensaje
     * Función que dice si una cadena es un palíndromo o no
     */
    function palindromo(cadena) {

        return (cadena.toLowerCase().trim() === invert_cad(cadena.toLowerCase().trim()))?
        `La cadena ${cadena} es un palínromo`:
        `La cadena ${cadena} no es un palínromo`;
        
        // if (cadena.toLowerCase() === invert_cad(cadena.toLowerCase())) {
        //     return `La cadena ${cadena} es un palínromo`;
        // } else {
        //     return `La cadena ${cadena} no es un palínromo`;
        // }
    };
    
}