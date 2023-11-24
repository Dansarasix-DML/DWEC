const prompt = require('prompt-sync')();

let a = parseInt(prompt("Dime el primer número: "));
let b = parseInt(prompt("Dime el segundo número: "));
let numero1 = a;
let numero2 = b;

numero1 += numero2;
console.log("%s += %s -> %s", a, b, numero1)
numero1 = a;
numero1 -= numero2;
console.log("%s -= %s -> %s", a, b, numero1)
numero1 = a;
numero1 *= numero2;
console.log("%s *= %s -> %s", a, b, numero1)
numero1 = a;
numero1 /= numero2;
console.log("%s /= %s -> %s", a, b, numero1)
numero1 = a;
numero1 %= numero2;
console.log("%s %= %s -> %s", a, b, numero1)
numero1 = a;
numero1 **= numero2;
console.log("%s **= %s -> %s", a, b, numero1)
numero1 = a;

