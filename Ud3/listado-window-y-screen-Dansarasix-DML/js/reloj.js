/**
 * @author Daniel Marín López
 * 
 * @version 0.01a
 */

const agregarCero = valor => valor < 10 ? "0" + valor : valor;

function actualizarReloj() {
    let fecha = new Date();
    let horas = agregarCero(fecha.getHours());
    let minutos = agregarCero(fecha.getMinutes());
    let segundos = agregarCero(fecha.getSeconds());

    let reloj = document.getElementsByName("reloj")[0];
    reloj.textContent = horas + ":" + minutos + ":" + segundos + " h";
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(actualizarReloj, 1000);
    actualizarReloj();
})