/**
 * @author Daniel Marín López
 * @version 0.01a
 */

console.log("--Ejercicio 1--");

//Global
w = 7;
let a = 4;
console.log(`Global: ${a}, Global de window: ${w}`);

//Ámbito de bloque

{
    let b = 7;
    console.log(`Bloque: ${b}`);
}

// Local a una función

function imprimir(valor) {
    let c = valor;
    console.log(`Función: ${c}`);
}

imprimir(5);

// Accesible a un closure

function clousure_1() {
    let d = 8;
    imprimir(`Clousure: ${d}`);
}

clousure_1();

// Función aninada

function myFunc(valor) {
    function imprim_an(valor) {
        let e = valor;
        console.log(`Función ${e}`);
    }

    let f = valor;
    imprim_an(`Aninada: ${f}`);
}

myFunc(9);