/**
 * @author Daniel Marín López
 * @version
 */

document.addEventListener("DOMContentLoaded", function () {
    let array = [2, "", false, 0, {}, "foo", -1, true, {a: 1}, null, undefined, NaN];
    const equivalencia = {
        "": "\"\"",
        false: "false",
        true: "true"
    };
    const esFalsy = valor => !valor ? "Sí" : "No";
    const esNullish = valor => (valor === null || valor === undefined) ? "Sí" : "No";
    const cond1 = valor => equivalencia[valor] ? equivalencia[valor] : valor;
    const parraf = this.getElementsByTagName("p");

    parraf[0].innerHTML += `Un valor falsy es aquel que es equivalente al valor false,<br/>
    mientras que un valor nullish es un falsy y además una equivalencia al null.`;

    parraf[1].innerHTML += `Para detectar un falsy es tan fácil con negar el valor, esto es<br/>
    muy útil sobre todo en los condicionales.<br/><br/>`;

    array.forEach(element => {
        parraf[1].innerHTML += `¿${cond1(element)} es un Falsy? - ${esFalsy(element)}<br/>`;
    });

    parraf[2].innerHTML += `Solamente son valores nullish null y undefined, por lo que<br/>
    simplemente hay que comprobar que el valor sea uno de esos dos para saber si<br/> 
    es nullish o no.<br/><br/>`;

    array.forEach(element => {
        parraf[2].innerHTML += `¿${cond1(element)} es un Nullish? - ${esNullish(element)}<br/>`;
    });
})