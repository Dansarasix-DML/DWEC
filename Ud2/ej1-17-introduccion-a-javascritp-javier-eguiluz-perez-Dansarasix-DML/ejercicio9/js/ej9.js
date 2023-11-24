/**
 * @author Daniel Marín López
 * @version 0.05a
 * 
 * Ejercicio 9
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
           mensaje.textContent = infocad(cadena.value);
        });
        
    });
    
    
    /**
     * @name infocad
     * @param {*} cadena 
     * 
     * Recibe una cadena y usando los métodos toUpperCase y toLowerCase
     * dicta si la cadena está enteramente en mayúsculas o minúsculas.
     * 
     * @returns mensaje
     * Devielve: Mensaje
     */
    function infocad(cadena) {
        if (cadena === cadena.toUpperCase()) {
            return `La cadena "${cadena}" está en mayúsculas`;
        } 
        if (cadena === cadena.toLowerCase()) {
            return `La cadena "${cadena}" está en minúsculas`;
        }
        return `La cadena "${cadena}" es una mezcla`;
    };
    
}