/**
 * @author Daniel Marín López
 * @version 0.01a
 */

console.log("--Ejercicio 2--");

// let aa = 5;

// {
//     function multiplica(val) {
//         function anidada(v1, v2) {
//             let res = aa*v1*v2;
//             return res;
//         }
//         let cc = val;
//         let dd = 7;
//         return anidada(cc, dd);
//     }

//     let bb = 2;
//     console.log(`El resultado es ${multiplica(bb)}`);
// }

function producto(val1) {
    let fact1 = val1;
    return f2 => fact1*f2;
}

{
    ac = 1n;
    const prod_11 = producto(11n);
    ac*=prod_11(3n);
    ac*=prod_11(5n);
    ac*=prod_11(7n);
    console.log(`El resultado es ${ac}`);
}
