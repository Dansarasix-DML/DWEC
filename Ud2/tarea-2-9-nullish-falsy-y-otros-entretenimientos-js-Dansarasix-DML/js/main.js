/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

console.log("Ejercicio 1");

const esFalsy = valor => !valor;

console.log(`¿Null es Falsy? ${esFalsy(null) ? "Sí" : "No"}`);
console.log(`¿0 es Falsy? ${esFalsy(0) ? "Sí" : "No"}`);
console.log(`¿"" es Falsy? ${esFalsy("") ? "Sí" : "No"}`);

console.log("Ejercicio 2");

{let array1 = [null, NaN, true, undefined, "lourdes", 0, "", false, 6];
console.log("Foreach");
array1.forEach(element => {
    let mensaje = (element === "" ? `¿"" es Falsy?` : `¿${element} es Falsy?`);
    console.log(`${mensaje} ${esFalsy(element) ? "Sí" : "No"}`);
});

console.log("---");
console.log("Forof");
for (const element of array1) {
    let mensaje = (element === "" ? `¿"" es Falsy?` : `¿${element} es Falsy?`);
    console.log(`${mensaje} ${esFalsy(element) ? "Sí" : "No"}`);
}}

console.log("Ejercicio 3");

const valoresFalsy = {
    valor1: null,
    valor2: 0,
    valor3: "lourdes",
    valor4: NaN,
    valor5: false,
    valor6: "",
    valor7: 8,
    valor8: true,
    valor9: undefined
}

console.log("Forin");
for (const prop in valoresFalsy) {
    valoresFalsy[prop];
    let mensaje = (valoresFalsy[prop] === "" ? `¿"" es Falsy?` : `¿${valoresFalsy[prop]} es Falsy?`);
    console.log(`${mensaje} ${esFalsy(valoresFalsy[prop]) ? "Sí" : "No"}`);
}
console.log("Forof");
for (const element of Object.keys(valoresFalsy)) {
    let mensaje = (valoresFalsy[element] === "" ? `¿"" es Falsy?` : `¿${valoresFalsy[element]} es Falsy?`);
    console.log(`${mensaje} ${esFalsy(valoresFalsy[element]) ? "Sí" : "No"}`);
}
console.log("Foreach");
Object.entries(valoresFalsy).forEach(([key, element]) => {
    let mensaje = (valoresFalsy[key] === "" ? `¿"" es Falsy?` : `¿${valoresFalsy[key]} es Falsy?`);
    console.log(`${mensaje} ${esFalsy(valoresFalsy[key]) ? "Sí" : "No"}`);
});

console.log("Ejercicio 4");

function ObjetoPorDefecto(obj) {
    obj ??= {};

    const defecto = {
        name:"character", 
        shoots: {
            normal: "normal_shoot", 
            focus: "focus_shoot"
        }
    }
    
    return {
        ...defecto,
        ...obj,
        shoots: {...defecto.shoots, ...obj.shoots}
    };
}

console.log(ObjetoPorDefecto({name:"Reimu Hakurei"}));
console.log(ObjetoPorDefecto({spellcard: "Spirit Sign \"Fantasy Seal\""}));
console.log(ObjetoPorDefecto({shoots: {roar_mode: true, spirit_trans: false}}));
console.log(ObjetoPorDefecto({}));
console.log(ObjetoPorDefecto());
console.log(ObjetoPorDefecto(22));
console.log(ObjetoPorDefecto(null));
console.log(ObjetoPorDefecto({shoots: {}}));
// console.log(ObjetoPorDefecto({...pl00, name:"Reimu Hakurei"}));