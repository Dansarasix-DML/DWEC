/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 5
 */

/*
Mala práctica usar alert
*/

{
    document.addEventListener("DOMContentLoaded", function () {
        let numero1 = document.getElementById("numero1");
        let numero2 = document.getElementById("numero2");
        let comp = document.getElementById("Comprobar");
        let mensaje = document.getElementById("mensaje");

        comp.addEventListener("click", function () {
            if(numero1.value < numero2.value) {
                mensaje.textContent = "número 1 no es menor que numero2";
            }
        
            if(numero2.value > 0) {
                mensaje.textContent =  "número 2 es positivo";
            }
        
                // || es or, && es and
            if(numero1.value < 0 || numero1.value != 0) {
                mensaje.textContent = "número 1 es negativo o distinto de cero";
            }
                // ++numero1 incrementa en 1 numero1 y luego compara
            if(++numero1.value <= numero2.value) {
                mensaje.textContent = `Incrementar en 1 unidad el valor de número 1 no lo 
                hace mayor o igual que número 2`;
            }
        })
    });
    
}
