/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

/**
 * Función que recibe una dimensión para un array y lo
 * crea con los números naturales y lo devuelve.
 * @name crearArray
 * @param {Number} dimension 
 * @returns Array
 */
function crearArray(dimension) {
    if (typeof dimension !== 'number' || dimension <= 0 || !Number.isInteger(dimension)) {
        console.error('La dimensión debe ser un número entero positivo.');
        return null;
    }

    let array = Array.from({ length: dimension }, function (_, index) {
        return index;
    });

    return array;
}

/**
 * Función que mide la eficencia de un método para meter/eliminar elementos en un array.
 * @name medirEficiencia
 * @param {String} operacion 
 * @param {Predicate} metodo 
 * @returns String
 */
function medirEficiencia(operacion, metodo) {
    const inicio = performance.now();
    operacion(metodo);
    const fin = performance.now();
    return `Tiempo de ejecución: ${fin - inicio} milisegundos.`;
}

/**
 * Función que introduce elementos en un array independientemente del método usado.
 * @name introducirElementos
 * @param {String} metodo 
 */
function introducirElementos(metodo) {
    const array = [];
    for (let i = 0; i < 100; i++) {
      metodo(array, i);
    }
}

/**
 * Función que elimina elementos en un array independientemente del método usado. 
 * @name eliminarElementos
 * @param {String} metodo 
 */
function eliminarElementos(metodo) {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(i);
    }
  
    for (let i = 0; i < 100; i++) {
      metodo(array);
    }
}

// Relación de nombres con métodos
const metodosIntroduccion = [
    { nombre: 'push()', metodo: (array, elemento) => array.push(elemento) },
    { nombre: 'unshift()', metodo: (array, elemento) => array.unshift(elemento) },
    { nombre: 'directamente', metodo: (array, elemento) => array[array.length] = elemento },
    { nombre: 'fijando tamaño en new Array', metodo: (array, elemento) => { array.length++; array[array.length - 1] = elemento; } }
];

const metodosEliminacion = [
    { nombre: 'pop()', metodo: array => array.pop() },
    { nombre: 'shift()', metodo: array => array.shift() },
    { nombre: 'directamente', metodo: array => delete array[array.length - 1] },
    { nombre: 'fijando tamaño', metodo: array => { array.length--; } }
];


document.addEventListener("DOMContentLoaded", function () {
    const eje1 = this.getElementsByName("ejercicio1")[0];
    const eje2 = this.getElementsByName("ejercicio2")[0];
    const eje3 = this.getElementsByName("ejercicio3")[0];
    const eje4 = this.getElementsByName("ejercicio4")[0];
    const dimension = this.getElementsByName("dimension")[0];
    const envio = this.getElementsByName("envio")[0];
    const eje5 = this.getElementsByName("ejercicio5")[0];
    //Función callback que crea un array en base a X argumentos.
    const convertArray = (...Args) => Array.from(Args);
    const eje6 = this.getElementsByName("ejercicio6")[0];
    //Función callback que crea un array en base a X argumentos y
    //lo aplana con el método flat() y una profundidad.
    const flatArray = (prof, ...Args) => Array.from(Args).flat([prof]);
    const eje7 = this.getElementsByName("ejercicio7")[0];
    //Función callback para filtrar los undefined de un array
    const rem_und = array => array.filter(value => value !== undefined);
    const eje8 = this.getElementsByName("ejercicio8")[0];
    const eje91 = this.getElementsByName("ejercicio9-1")[0];
    const eje92 = this.getElementsByName("ejercicio9-2")[0];
    let asignaturas = new Array("DWEC", "DWES", "DeAW", "DIW", "EIE", "React", "Wordpress");
    asignaturas.forEach((element, index, array) => {
        eje1.innerHTML += (element === array[index]) ? `arignaturas[${index}] = ${element}<br/>` : null;
    });
    let games = ["東方鬼形獣　～ Wily Beast and Weakest Creature", "東方虹龍洞　～ Unconnected Marketeers"];
    eje2.innerHTML += "<b>¿Existe el elemento en  games[1]? ¿Cuál es?</b><br/>";
    eje2.innerHTML += (1 in games) ? `Sí, y es "${games[1]}"` : "No";
    eje2.innerHTML += "<br/>";
    eje2.innerHTML += "<b>¿Existe el elemento en  games[2]? ¿Cuál es?</b><br/>";
    eje2.innerHTML += (2 in games) ? `Sí, y es "${games[2]}"` : "No";
    const player = {
        name: "Reimu Hakurei",
        normal_shoot: "Homing Amulet",
        focus_shoot: "Persuation Needle",
        spellcard: "Spirit Sign \"Fantasy Seal\""
    }
    eje3.innerHTML += "<ul>";
    eje3.innerHTML += `<li><b>¿Es un array "games"?</b> - ${Array.isArray(games) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array 4?</b> - ${Array.isArray(new Number(4)) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array "kaka"?</b> - ${Array.isArray(new String("kaka")) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array "asignaturas"?</b> - ${Array.isArray(asignaturas) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array "player"?</b> - ${Array.isArray(player) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array "Array.prototype"?</b> - ${Array.isArray(Array.prototype) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += `<li><b>¿Es un array "{_proto_:Array.prototype}"?</b> - ${Array.isArray({_proto_:Array.prototype}) ? "Sí es un array." : "No es un array."}</li>`;
    eje3.innerHTML += "<ul>";
    envio.addEventListener("click", function(event) {
        event.preventDefault;
        let array = crearArray(parseInt(dimension.value));
        eje4.innerHTML = `[${array}]`;
        
    });
    let array = convertArray(2, "kk", player, asignaturas);
    array.forEach(element => {
        eje5.innerHTML += `${element}<br/>`;
    });
    let array2 = flatArray(1, 1, 2, 3, [4, [5, 6]]);
    eje6.innerHTML += "Los dos últmos números no entran por el nivel de profundidad.<br/>";
    array2.forEach(element => {
        eje6.innerHTML += `${element}<br/>`;
    });
    eje6.innerHTML += "Incrementamos profundidad.<br/>";
    let array3 = flatArray(2, 1, 2, 3, [4, [5, 6]]);
    array3.forEach(element => {
        eje6.innerHTML += `${element}<br/>`;
    });
    let characters = ["Reimu Hakurei", "Marisa Kirisame", , "Sakuya Izayoi", , , , "Sanae Kochiya"];
    eje7.innerHTML += "Array \"characters\" sin filtrar:<br/>";
    eje7.innerHTML += `[${characters}]<br/><br/>`;
    eje7.innerHTML += "Array \"characters\" filtrado:<br/>";
    eje7.innerHTML += `[${rem_und(characters)}]`;
    eje8.innerHTML += `<b><i>Método ForEach</b></i>:<br/>`;
    eje8.innerHTML += `Usado en el ejercicio 6.<br/><br/>`;
    eje8.innerHTML += `<b><i>Array.every()</b></i>:<br/>`;
    let notas = [7, 1, 4, 8, 6, 11, 10];
    let aprobado = valor => valor >= 5;
    eje8.innerHTML += `notas.every(valor => valor >= 5) = ${notas.every(aprobado)}<br/><br/>`;
    eje8.innerHTML += `<b><i>Array.some()</b></i>:<br/>`;
    eje8.innerHTML += `notas.some(valor => valor < 5) = ${notas.some(valor => valor < 5)}<br/><br/>`;
    eje8.innerHTML += `<b><i>Array filtrado</b></i>:<br/>`;
    eje8.innerHTML += `En el ejercicio anterior.`;
    eje91.innerHTML += "<b>Medición para introducir elementos</b>:<br/>";
    metodosIntroduccion.forEach(metodo => {
        eje91.innerHTML += `<b>Método ${metodo.nombre}</b>:<br/>`;
        eje91.innerHTML += `${medirEficiencia(introducirElementos, metodo.metodo)}<br/>`;
    });
    eje92.innerHTML += "<b>Medición para eliminar elementos</b>:<br/>";
    metodosEliminacion.forEach(metodo => {
        eje92.innerHTML += `<b>Método ${metodo.nombre}</b>:<br/>`;
        eje92.innerHTML += `${medirEficiencia(eliminarElementos, metodo.metodo)}<br/>`;
    });
})