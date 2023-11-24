/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

console.log("Ejercicio 1");

let multiplicaPares = (function() {
    let sol = 1;
    for (let i = 1; i <= 10; i++) {
        if (i == 9) {
            break;
        } else {
            if ((i%2)==0) {
                sol *= i;
            }else{
                continue;
            }
        }
    }
    return sol;
})();

console.log(`El resultado es: ${multiplicaPares}`);

console.log("Ejercicio 2");

/**
 * Las cadenas al igual que los arrays son iterables,
 * ya que ambos tienen indices.
 */

const cadena = "Lourdes es la reina";

for (const iterator of cadena) {
    console.log(iterator);
}

console.log("Ejercicio 3");

const alumnos = ["Reimu Hakurei", "Marisa Kirisame", "Sanae Kochiya", "Laura Luque", "Eduardo Ruz"];

alumnos.forEach(function (element, index, array) {
    console.log(`alumnos[${index}] = ${element}`);
    console.log(`Array completo: ${array}`);
});

console.log("Ejercicio 4");

/**
 * @name esIterable
 * @param {*} obj 
 * @returns bool
 * 
 * Función que evalua si un objeto es un iterable.
 */
function esIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function' || typeof obj.next === 'function';
}

const pl00 = {
    name: "Reimu Hakurei",
    normal_shoot: "Homing Amulet",
    focus_shoot: "Persuation Needle"
}
console.log(pl00);
console.log(`¿Es iterable alumnos? ${esIterable(alumnos) ? "Sí" : "No"}`);
console.log(`¿Es iterable pl00? ${esIterable(pl00) ? "Sí" : "No"}`);

console.log("Ejercicio 5");
const games = new Array();
games[0] = "東方鬼形獣　～ Wily Beast and Weakest Creature";
games[1] = "東方虹龍洞　～ Unconnected Marketeers";
games[2] = "Five Nights at Freddy's: Security Breach";

console.log("--- Array ---");
for (const i in alumnos) {
    if (Object.hasOwnProperty.call(alumnos, i)) {
        const element = alumnos[i];
        console.log(element);
    }
}
console.log("--- Objeto ---");
for (const i in pl00) {
    if (Object.hasOwnProperty.call(pl00, i)) {
        const element = pl00[i];
        console.log(element);
    }
}

console.log("--- new Array() ---");
for (const i in games) {
    if (Object.hasOwnProperty.call(games, i)) {
        const element = games[i];
        console.log(element);
    }
}