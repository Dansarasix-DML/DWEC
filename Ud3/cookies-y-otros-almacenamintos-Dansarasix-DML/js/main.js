/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

//Funciones de LocalStorage

function LstoreValue() {
    let key = document.getElementsByName('keyInput')[0].value;
    let value = document.getElementsByName('valueInput')[0].value;
    let mensaje = document.getElementsByName('mensaje')[0];

    if (key && value) {
        localStorage.setItem(key, value);
        mensaje.textContent = 'Valor almacenado correctamente.';
    } else {
        mensaje.textContent = 'Por favor, ingrese tanto la clave como el valor.';
    }
}

function LretrieveValue() {
    let key = document.getElementsByName('keyInput')[0].value;
    let value = localStorage.getItem(key);
    let mensaje = document.getElementsByName('mensaje')[0];

    if (value) {
        mensaje.textContent = 'Valor recuperado: ' + value;
    } else {
        mensaje.textContent = 'No se encontró ningún valor para la clave proporcionada.';
    }
}

function LremoveValue() {
    let key = document.getElementsByName('keyInput')[0].value;
    let mensaje = document.getElementsByName('mensaje')[0];
    localStorage.removeItem(key);
    mensaje.textContent = 'Valor eliminado correctamente.';
}

function LclearAllValues() {
    let mensaje = document.getElementsByName('mensaje')[0];
    localStorage.clear();
    mensaje.textContent = 'Todos los valores eliminados correctamente.';
}

function LgetKeysCount() {
    let mensaje = document.getElementsByName('mensaje')[0];
    let keysCount = localStorage.length;
    mensaje.textContent = 'Número de claves almacenadas: ' + keysCount;
}

// Funciones de SessionStorage

function SstoreValue() {
    let key = document.getElementsByName('keyInput2')[0].value;
    let value = document.getElementsByName('valueInput2')[0].value;
    let mensaje = document.getElementsByName('mensaje2')[0];

    if (key && value) {
        sessionStorage.setItem(key, value);
        mensaje.textContent = 'Valor almacenado correctamente.';
    } else {
        mensaje.textContent = 'Por favor, ingrese tanto la clave como el valor.';
    }
}

function SretrieveValue() {
    let key = document.getElementsByName('keyInput2')[0].value;
    let value = sessionStorage.getItem(key);
    let mensaje = document.getElementsByName('mensaje2')[0];

    if (value) {
        mensaje.textContent = 'Valor recuperado: ' + value;
    } else {
        mensaje.textContent = 'No se encontró ningún valor para la clave proporcionada.';
    }
}

function SremoveValue() {
    let key = document.getElementsByName('keyInput2')[0].value;
    let mensaje = document.getElementsByName('mensaje2')[0];
    sessionStorage.removeItem(key);
    mensaje.textContent = 'Valor eliminado correctamente.';
}

function SclearAllValues() {
    let mensaje = document.getElementsByName('mensaje2')[0];
    sessionStorage.clear();
    mensaje.textContent = 'Todos los valores eliminados correctamente.';
}

function SgetKeysCount() {
    let mensaje = document.getElementsByName('mensaje2')[0];
    let keysCount = sessionStorage.length;
    mensaje.textContent = 'Número de claves almacenadas: ' + keysCount;
}

document.addEventListener("DOMContentLoaded", function () {
    const alm_val = this.getElementsByName('alm_val')[0];
    const ret_val = this.getElementsByName('ret_val')[0];
    const rem_val = this.getElementsByName('rem_val')[0];
    const clr_val = this.getElementsByName('clr_val')[0];
    const get_keys = this.getElementsByName('get_keys')[0];
    const alm_val2 = this.getElementsByName('alm_val2')[0];
    const ret_val2 = this.getElementsByName('ret_val2')[0];
    const rem_val2 = this.getElementsByName('rem_val2')[0];
    const clr_val2 = this.getElementsByName('clr_val2')[0];
    const get_keys2 = this.getElementsByName('get_keys2')[0];

    alm_val.addEventListener("click", LstoreValue);
    ret_val.addEventListener("click", LretrieveValue);
    rem_val.addEventListener("click", LremoveValue);
    clr_val.addEventListener("click", LclearAllValues);
    get_keys.addEventListener("click", LgetKeysCount);

    alm_val2.addEventListener("click", SstoreValue);
    ret_val2.addEventListener("click", SretrieveValue);
    rem_val2.addEventListener("click", SremoveValue);
    clr_val2.addEventListener("click", SclearAllValues);
    get_keys2.addEventListener("click", SgetKeysCount);
})