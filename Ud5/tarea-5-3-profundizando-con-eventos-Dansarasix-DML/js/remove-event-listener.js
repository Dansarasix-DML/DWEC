/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

function mostrarTexto(texto) {
    textarea.value += texto;
}

document.addEventListener("DOMContentLoaded", function() {
    function handleButtonClick(event) {
        mostrarTexto(`type: ${event.type}\n`);
    }

    const textarea = document.getElementById('textarea');
    const buttons = this.querySelectorAll(".mouse-event-2");
    const elimina = this.querySelector(".remove-event-listener");

    buttons.forEach(button => {
        button.addEventListener(button.textContent, handleButtonClick);
    });

    elimina.addEventListener("click", function () {
        buttons.forEach(button => {
            button.removeEventListener(button.textContent, handleButtonClick);
        });
    })

});