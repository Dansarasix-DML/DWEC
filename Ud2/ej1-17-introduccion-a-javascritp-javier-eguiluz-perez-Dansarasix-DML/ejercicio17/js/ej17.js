/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 17
 */

document.addEventListener("DOMContentLoaded", function () {
    const info = document.getElementById("info");
    const text = document.getElementById("texto");
    //Límite de caracteres
    const LIM = 100;
    //Array de teclas que se pueden seguir pulsando
    const excep = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    //Array de teclas extra
    const another = ["x", "z"];
    text.addEventListener("keydown", limitar);
    text.addEventListener("keyup", informa)

    /**
     * @name limitar
     * @param {*} event 
     * @returns 
     * 
     * Función que limita caracteres
     */
    function limitar(event) {
        if (event.ctrlKey && another.includes(event.key)) {
            return;
        }

        if (this.value.length >= LIM && !excep.includes(event.key)) {
            event.preventDefault();
        }
    }

    /**
     * @name informa
     * @param {*} event 
     * 
     * Función que te dice cuantos caracteres quedan
     */
    function informa(event) {
        info.innerHTML = `Máximo ${LIM - this.value.length} caracteres`;
    }
})