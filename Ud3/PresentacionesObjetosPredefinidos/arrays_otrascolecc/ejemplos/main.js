/**
 * @author Laura Luque Bravo
 * @author Daniel Marín López
 * @author Alejandro Vaquero Abad
 * 
 * @version 0.08b
 */


console.log("Array Normal");
let alumnos = ["Daniel Marín", "Laura Luque", "Alejandro Vaquero"];
console.log(alumnos); //['Daniel Marín', 'Laura Luque', 'Alejandro Vaquero']
console.log(alumnos.length); // 3

console.log("Array Clásico");
let asignaturas = new Array("DWEC", "DWES", "DeAW", "DIW", "EIE", "React", "Wordpress");
console.log(asignaturas); // ['DWEC', 'DWES', 'DeAW', 'DIW', 'EIE', 'React', 'Wordpress']

console.log("Array Mixto");
let persona = ["Laura", 31, 1.5, {trabaja: false}, ["Videojuegos", "Cantar", "Programar"], NaN];
console.log(persona); // ['Laura', 31, 1.5, {…}, Array(3), NaN]

console.log("long VS num");
let long = new Array(5);
console.log(long); //(5) [empty × 5]
console.log(long.length); // 5
//typeof(long) = 'object'
let num = Array.of(5);
console.log(num); // [5]
//typeof(num) = 'object'

console.log("Índices en un array");
let characters = ["Reimu Hakurei", "Marisa Kirisame", , "Sakuya Izayoi", , , , "Sanae Kochiya"];
console.log(characters);
console.log(`characters[0]: ${characters[0]}`);
console.log(`characters[2]: ${characters[2]}`);
console.log(`characters[3]: ${characters[3]}`);
/*
characters[0] = "Reimu Hakurei"
characters[2] = undefined
characters[3] = "Sakuya Izayoi"
characters[5] = undefined
*/


console.log("Añadir y eliminar valores de un array (push, pop)");
let games = ["東方鬼形獣　～ Wily Beast and Weakest Creature", "東方虹龍洞　～ Unconnected Marketeers"];
games.push("東方獣王園　〜 Unfinished Dream of All Living Ghost");
console.log(games); 
// (3) ['東方鬼形獣　～ Wily Beast and Weakest Creature', '東方虹龍洞　～ Unconnected Marketeers',
// '東方獣王園　〜 Unfinished Dream of All Living Ghost']

games.pop();
console.log(games);
games.push("東方獣王園　〜 Unfinished Dream of All Living Ghost");
// (2) ['東方鬼形獣　～ Wily Beast and Weakest Creature', '東方虹龍洞　～ Unconnected Marketeers']

console.log("Añadir y eliminar valores de un array (shift, unshift)");
let films = ["Brother Bear", "Insidious", "IT"];
console.log(films.shift()); // 'Brother Bear'
console.log(films); // (2) ['Insidious', 'IT']
films.unshift("Brother Bear");
console.log(films); // (3) ['Brother Bear', 'Insidious', 'IT']

console.log("Métodos Estáticos");

console.log("Array.of");
let comida = Array.of("Salmón", "Pizza", "Solomillo");
console.log(comida); // (3) ['Salmón', 'Pizza', 'Solomillo']

console.log("Array.from");
let frase = Array.from("Lourdes la mejor");
console.log(frase); // (16) ['L', 'o', 'u', 'r', 'd', 'e', 's', ' ', 'l', 'a', ' ', 'm', 'e', 'j', 'o', 'r']
let num1 = Array.from(2);
console.log(num1); // []
let pot = Array.from([1, 4, 8], x => x**2);
console.log(pot); // (3) [1, 16, 64]

console.log("Array.isArray");
console.log(`¿Es un array alumnos? ${Array.isArray(alumnos) ? "Sí" : "No"}`); // Sí
console.log(`¿Es un array un objeto ({})? ${Array.isArray({}) ? "Sí" : "No"}`); // No
console.log(`¿Es un array asignaturas (new Array)? ${Array.isArray(asignaturas) ? "Sí" : "No"}`); // Sí
console.log(`¿Es un array "kk"? ${Array.isArray("kk") ? "Sí" : "No"}`); // No
console.log(`¿Es un array Array.prototype? ${Array.isArray(Array.prototype) ? "Sí" : "No"}`); // Sí
console.log(`¿Es un array {_proto_:Array.prototype}? ${Array.isArray({_proto_:Array.prototype}) ? "Sí" : "No"}`); // No

console.log("Array.fill()");
let relleno1 = [1, 2, 3, 4];
console.log(relleno1.fill(7)); // (4) [7, 7, 7, 7]
console.log(relleno1.fill("kk", 2)); // (4) [7, 7, 'kk', 'kk']
let relleno2 = [1, 2, 3, 4];
console.log(relleno2.fill("kk", 1, 3)); // (4) [1, 'kk', 'kk', 4]


console.log("Métodos de comprobación");

let notas = [7, 1, 4, 8, 6, 11, 10];
console.log(notas);

console.log("Array.every");
let aprobado = valor => valor >= 5;
console.log(notas.every(aprobado)); // false

console.log("Array.find");
let found1 = notas.find(valor => valor == 4);
console.log(found1); // 4

let found2 = notas.find(valor => valor >= 5);
console.log(found2); // 7

console.log("Array.indexof");
let frutas = ["banana", "pera", "naranja", "melón", "sandía"];

console.log(frutas.indexOf("pera")); // 1
console.log(frutas.indexOf("sandía")); // 4
console.log(frutas.indexOf("melocotón")); // -1

let moda1 = ["rojo", "azul", "rojo", "rojo"];
console.log(moda1);

console.log("Array.lastindexof");
console.log(moda1.lastIndexOf("rojo")); // 3
console.log(moda1.lastIndexOf("azul")); // 1

console.log("Array.includes");
console.log(frutas.includes("naranja")); //true
console.log(frutas.includes("mandarina")); //false

console.log("Array.join");
console.log(frutas.join()); // banana,pera,naranja,melón,sandía
console.log(frutas.join(" - ")); // banana - pera - naranja - melón - sandía

console.log("Array.at");
console.log(frutas.at(2)); // naranja
console.log(frutas.at(-1)); // sandía
console.log(frutas.at(3)); // melón
console.log(frutas.at(7)); // undefined

console.log("Array.filter");
console.log(notas.filter((value) => value >= 5)); // (4) [7, 9, 8, 6]
console.log(frutas.filter((cad) => cad.length >= 5)); // (4) ['banana', 'naranja', 'melón', 'sandía']

console.log("Métodos de modificación");

console.log("array.slice");
console.log(asignaturas.slice(1, 5)); // ['DWES', 'DeAW', 'DIW', 'EIE']
console.log(asignaturas);

console.log("array.splice");
characters.splice(2,0,"Youmu Konpaku");
console.log(characters); // ['Reimu Hakurei', 'Marisa Kirisame', 'Youmu Konpaku', 
//empty, 'Sakuya Izayoi', empty × 3, 'Sanae Kochiya']

console.log("array.split");
let cadena1 = "Buenos Días";
console.log(cadena1);
let subarray = cadena1.split("", 4);
console.log(subarray); // (4) ['B', 'u', 'e', 'n']

console.log("array.concat");
console.log(comida.concat(frutas)); // (8) ['Salmón', 'Pizza', 'Solomillo', 
//'banana', 'pera', 'naranja', 'melón', 'sandía']

console.log("Métodos de ordenación");

let cosas = ["lourdes", "Lourdes", "la", "1 Lourdes", "2 Lourdes", "lourdes 3"];
console.log("array.sort");
console.log(frutas.sort()); // (5) ['banana', 'melón', 'naranja', 'pera', 'sandía']
console.log(notas.sort()); // (8) [1, 10, 11, 4, 6, 7, 8, 9]
console.log(notas.sort((a,b) => a-b)); // (5) [1, 4, 6, 7, 8, 9, 10, 11]
console.log(cosas.sort()); // (5) ['1 Lourdes', '2 Lourdes', 'Lourdes', 'la', 'lourdes', 'lourdes 3']

console.log("array.reverse");
console.log(frutas.reverse()); // (5) ['sandía', 'pera', 'naranja', 'melón', 'banana']

console.log("Formas de recorrer un array:");

console.log("For clásico");
for (let i = 0; i < games.length; i++) {
    const element = games[i];
    console.log(element);    
}
//東方鬼形獣　～ Wily Beast and Weakest Creature
//東方虹龍洞　～ Unconnected Marketeers
//東方獣王園　〜 Unfinished Dream of All Living Ghost
console.log("For of");
for (const element of games) {
    console.log(element);
}
//東方鬼形獣　～ Wily Beast and Weakest Creature
//東方虹龍洞　～ Unconnected Marketeers
//東方獣王園　〜 Unfinished Dream of All Living Ghost
console.log("For in");
for (const key in films) {
    console.log(films[key]);
}
//Brother Bear
//Insidious
//IT
console.log("Foreach");
films.forEach(element => {
    console.log(element);
});
//Brother Bear
//Insidious
//IT

console.log("TypedArrays");

console.log("Creación del buffer");
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength); //16

//Creación de la vista
const int32Array = new Int32Array(buffer);

console.log("Añadimos elementos");
int32Array[0] = 5;
int32Array[1] = 34;
int32Array[2] = 8;
int32Array[3] = 12;

console.log(`int32Array[0]: ${int32Array[0]}`); // int32Array[0]: 5
console.log(`int32Array[1]: ${int32Array[1]}`); // int32Array[1]: 34
console.log(`int32Array[2]: ${int32Array[2]}`); // int32Array[2]: 8
console.log(`int32Array[3]: ${int32Array[3]}`); // int32Array[3]: 12