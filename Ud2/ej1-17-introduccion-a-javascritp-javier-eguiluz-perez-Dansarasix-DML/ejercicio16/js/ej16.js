/**
 * @author Daniel Marín López
 * @version 0.03a
 * 
 * Ejercicio 16
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
const Xabs = evento.clientX + window.innerWidth;
const Yabs = evento.clientY + window.innerHeight;
const Xrel = evento.clientX;
const Yrel = evento.clientY;
switch (evento.type) {
  case 'mousemove':
    infoElement.style.backgroundColor = '#FFFFFF';
    muestraInformacion(['Ratón', 
    `Navegador [${Xrel}, ${Yrel}]`, 
    `Página [${Xabs}, ${Yabs}]`]);
    break;
  case 'keypress':
    infoElement.style.backgroundColor = '#CCE6FF';
    const letra = String.fromCharCode(evento.charCode);
    const codigo = letra.charCodeAt(0);
    muestraInformacion(['Teclado', `Carácter [${letra}]`, `Código [${codigo}]`]);
    break;
  case 'click':
    infoElement.style.backgroundColor = '#FFFFCC';
    const [par1, par2] = direccion(Xrel, Yrel);
    muestraInformacion(['Ratón', 
    `Navegador [${Xrel}, ${Yrel}]`, 
    `Página [${Xabs}, ${Yabs}]`, 
    `Has pulsado ${par1}, ${par2}`]);
    break;
  }
}

/**
 * @name direccion
 * @param {*} x 
 * @param {*} y 
 * @returns res
 * 
 * Función que devuelve la posición del ratón según el objeto screen
 */
function direccion(x, y) {
  let res = [];
  res.push((x < screen.width/2) ? "Izquierda" : "Derecha");
  res.push((y < screen.height/2) ? "Arriba" : "Abajo");
  // if (x < screen.width/2) {
  //   res.push("Izquierda");
  // } else {
  //   res.push("Derecha");
  // }

  // if (y < screen.height/2) {
  //   res.push("Arriba");
  // } else {
  //   res.push("Abajo");
  // }

  return res;
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