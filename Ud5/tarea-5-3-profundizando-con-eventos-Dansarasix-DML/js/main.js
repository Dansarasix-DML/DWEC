/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

/**
 * Toma el contenido del target del evento y le suma 2
 * @param {Event} event 
 */
function suma(event) {
    event.target.textContent = Number(event.target.textContent) + 2;
}

/**
 * Toma el contenido del target del evento y le multiplica 2
 * @param {Event} event 
 */
function multiplica(event) {
    event.target.textContent = Number(event.target.textContent) * 2;
}

function mostrarTexto(texto) {
    textarea.value += texto;
}

const soloUnaVez = function () {
    this.textContent += 'SEACABÓ (' + new Date().getSeconds() + ')';
    this.classList.add('pulsado');
}

function limpiarTextarea() {
    textarea.value = '';
}

const init = function() {
    const textarea = document.getElementById('textarea');

    document.getElementById('contenedor').addEventListener("click", function(event) {
        if (event.target.classList.contains("multiplica-suma")) {
            multiplica(event);
            mostrarTexto(`${event.target.textContent} Capturing!  `);
        }
    }, true);
    
    document.getElementById('contenedor').addEventListener("click", function(event) {
        if (event.target.classList.contains("multiplica-suma")) {
            suma(event);
            mostrarTexto(`${event.target.textContent} Bubling!\n`);
        }
    });

    document.getElementById('contenedor').addEventListener("click", function(event) {
        if (event.target.classList.contains("suma-multiplica")) {
            suma(event);
            mostrarTexto(`${event.target.textContent} Capturing!  `);
        }
    }, true);
    
    document.getElementById('contenedor').addEventListener("click", function(event) {
        if (event.target.classList.contains("suma-multiplica")) {
            multiplica(event);
            mostrarTexto(`${event.target.textContent} Bubling!\n`);
        }
    });

    document.getElementById('limpia').addEventListener('click', limpiarTextarea);

    document.querySelector('.solo-una-vez').addEventListener('click', soloUnaVez, { once: true });

}

document.addEventListener("DOMContentLoaded", init);