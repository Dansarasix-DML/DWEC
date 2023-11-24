/**
 * @author Daniel Marín López
 * @version 0.01a
 */

console.log("--Ejercicio 3--");

const clousure = () => {
    let variable = null;
    const arrow = () => {
        variable ??= "Default";
        return variable;
    };
    return arrow();
}

console.log(`El valor recibido es: ${clousure()}`);