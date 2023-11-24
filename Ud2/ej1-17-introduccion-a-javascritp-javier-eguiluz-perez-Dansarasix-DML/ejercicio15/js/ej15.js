/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 15
 */

/*
Mala práctica usar alert
*/

// Siempre poner las cosas en bloques y no esté accesible.


/**
  * @name informacion
  * @param {*} evento 
  * 
  * Función que trabaja con los elementos del ratón
  */
function informacion(evento) {
  const infoElement = document.getElementById('info');
  switch (evento.type) {
    case 'mousemove':
      infoElement.style.backgroundColor = '#FFFFFF';
      const Xabs = evento.clientX + window.innerWidth;
      const Yabs = evento.clientY + window.innerHeight;
      const Xrel = evento.clientX;
      const Yrel = evento.clientY;
      muestraInformacion(['Ratón', `Navegador [${Xrel}, ${Yrel}]`, `Página [${Xabs}, ${Yabs}]`]);
      break;
    case 'keypress':
      infoElement.style.backgroundColor = '#CCE6FF';
      const letra = String.fromCharCode(evento.charCode);
      const codigo = letra.charCodeAt(0);
      muestraInformacion(['Teclado', `Carácter [${letra}]`, `Código [${codigo}]`]);
      break;
    case 'click':
      infoElement.style.backgroundColor = '#FFFFCC';
      break;
  }
}
/**
  * @name muestraInformacion
  * @param {*} mensaje 
  * 
  * Función que imprime el mensaje
  */
function muestraInformacion(mensaje) {
  const infoElement = document.getElementById('info');
  infoElement.innerHTML = `<h1>${mensaje[0]}</h1>`;
  for (let i = 1; i < mensaje.length; i++) {
    infoElement.innerHTML += `<p>${mensaje[i]}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener('mousemove', informacion);
  document.addEventListener('keypress', informacion);
  document.addEventListener('click', informacion);
})