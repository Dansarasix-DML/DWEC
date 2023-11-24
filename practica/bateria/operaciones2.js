const prompt = require('prompt-sync')();

let a = parseInt(prompt("Dime el primer número: ")); // parseInt sirve para pasar a entero
let b = parseInt(prompt("Dime el segundo número: "));; // la cadena proporcionada por el usuario.
let suma = a + b;
let resta = a - b;
let producto = a * b;
let cociente = a / b;
let modulo = a % b;
let potencia = a ** b;
console.log("Número 1: ", a);
console.log("Número 2: ", b);
console.log("SUMA: ", suma);
console.log("RESTA: ", resta);
console.log("PRODUCTO: ", producto);
console.log("COCIENTE: ", cociente);
console.log("MÓDULO: ", modulo);
console.log("POTENCIA: ", potencia);