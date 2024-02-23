/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

function mostrarTexto(texto) {
    textarea.value += texto;
}

document.addEventListener("DOMContentLoaded", function() {
    const controller = new AbortController();

    const textarea = document.getElementById('textarea');
    const buttons = this.querySelectorAll(".mouse-event-1");
    const elimina = this.querySelector(".remove-mouse-signal");

    buttons.forEach(button => {
        button.addEventListener(button.textContent, function (event) {
            mostrarTexto(`type: ${event.type}\n`);
        }, {signal:controller.signal});
    });

    elimina.addEventListener("click", function () {
        controller.abort();
    })

});