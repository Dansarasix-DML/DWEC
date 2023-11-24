const prompt = require('prompt-sync')();

let a = parseInt(prompt("Dime el primer número: "));
let b = parseInt(prompt("Dime el segundo número: "));
let c = parseInt(prompt("Dime el tercer número: "));
let d = parseInt(prompt("Dime el cuarto número: "));

let sol1 = (a + b) + c / d;
let sol2 = a + (b + c) / d;
let sol3 = a + b + (c / d);

console.log("(%s + %s) + %s / %s = %s", a, b, c, d, sol1);
console.log("%s + (%s + %s) / %s = %s", a, b, c, d, sol2);
console.log("%s + %s + (%s / %s) = %s", a, b, c, d, sol3);