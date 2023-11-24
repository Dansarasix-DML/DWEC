/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

console.log("Ejercicio 1");

/**
 * El parámetro rest coge varios argumentos pasados en
 * una función en forma de un array. Esto se usa sobre todo
 * cuando se tienen un conjunto indefinido de valores y no
 * tener que enumerarlos uno por uno.
 */

/**
 * @name imprimir
 * @param  {...any} Args 
 * 
 * Función para imprimir varios argumentos
 */
function imprimir(...Args) {
    Args.forEach(element => {
        console.log(element);
    });
}

imprimir(1, 2, 3, 4, 5);

console.log("Ejercicio 2");

/**
 * El argumento rest se puede usar de dos formas:
 * - Como operador: Si se usa como operador, este desmenuzará
 * el array o el objeto que se le pase.
 * - Como parámetro: Si se usa como parámetro, la función tomará
 * un conjunto indefinido de valores y los meterá en un array.
 */

function suma(x, y, z) {
    console.log(`El resultado es ${x+y+z}`);
}

console.log("Como operador:");
suma(...[3, 4, 8]);
console.log("Como parámetro:");
imprimir(...[3, 4, 8]);

console.log("Ejercicio 3");

/**
 * El operador rest también sirve para hacer copias de arrays u objetos,
 * sin embargo la copia no es perfecta ya que la copia solo llega al primer
 * nivel. Si se tienen elementos anidados estos no se duplicarán
 */

{
    let a = [1, 2, 3, [4, 5]];
    console.log(`a: [${a}]`);
    let b = [...a];
    console.log(`b: [${b}] (Copia de a)`);
    console.log(`¿Son el mismo array? ${a === b ? "Sí" : "No"}`);
    console.log(`¿Y los elementos anidados? ${a[3][0] === b[3][0] ? "Sí" : "No"}`);
    console.log(`¿Y estos elementos (a[1] y b[1])? ${a[1] === b[1] ? "Sí" : "No"}`);
    console.log("(Pone Sí, pero la respuesta es No porque la modificación de uno no afecta a la del otro.)")
}

console.log("Ejercicio 4");

function agrega(array, valor, bool) {
    return (bool ? [...array, valor] : array);
    // if (bool) {
    //     return [...array, valor];
    // } else {
    //     return array;
    // }
}

{let nums = [1, 2, 3];
let colores = ["rojo", "verde", "amarillo"];

console.log("Agregamos un nuevo valor a nums");
console.log(agrega(nums, 4, true));
console.log("Rechazamos agregar un nuevo valor a colores");
console.log(agrega(colores, "azul", false));}

console.log("Ejercicio 5");

const player00 = {
    name: "Reimu Hakurei",
    shoots: {
        normal_shoot: "Homing Amulet", 
        focus_shoot:"Persuation Needle"
    }
}
console.log("Original:");
console.log(player00);
const copy_pl00 = {...player00, spellcard: "Spirit Sign \"Fantasy Seal\""};
console.log("Copia:");
console.log(copy_pl00);
console.log(`¿Son el mismo objeto? ${player00 === copy_pl00 ? "Sí" : "No"}`);
console.log(`¿Y los elementos anidados? ${player00["shoots"] === copy_pl00["shoots"] ? "Sí" : "No"}`);

console.log("Ejercicio 6");

const coord1 = {
    x: 200,
    y: 120
}
console.log("Original:");
console.log(coord1);
const copy_coord1 = {...coord1, x: 45};
console.log("Copia (sobreescribe el valor de x):");
console.log(copy_coord1);

console.log("Ejercicio 7");

function agrega2(objeto1, objeto2, bool) {
    return (bool ? {...objeto1, ...objeto2} : objeto1);
    // if (bool) {
    //     return {...objeto1, ...objeto2};
    // } else {
    //     return objeto1;
    // }
}
const name_pl01 = {name: "Marisa Kirisame"};
const shoots_pl01 = {normal_shoot: "Illusion Laser", focus_shoot:"Magic Missile"};
const pl01 = agrega2(name_pl01, shoots_pl01, true);
console.log(pl01);