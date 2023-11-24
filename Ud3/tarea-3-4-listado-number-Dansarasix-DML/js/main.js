/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

/**
 * Función que verifica si un número sigue un sistema númerico
 * @name esValido
 * @param {Number} numero 
 * @param {String} sistema 
 * @returns Boolean
 */
function esValido(numero, sistema) {
    switch (sistema) {
        case "bin":
            return /^[01]+$/.test(numero);
        case "oct":
            return /^[0-7]+$/.test(numero);
        case "dec":
            return /^\d+$/.test(numero);
        case "hex":
            return /^[0-9A-Fa-f]+$/.test(numero);
        default:
            return false;
    }
}

/**
 * Función que trata el primer bloque del formulario
 * @name sis_num
 */
function sis_num() {
    const bin = document.getElementsByName("Bin")[0];
    const oct = document.getElementsByName("Oct")[0];
    const dec = document.getElementsByName("Dec")[0];
    const hex = document.getElementsByName("Hex")[0];
    [bin, oct, dec, hex].forEach(input => {
        input.addEventListener("input", function () {
            let value = this.value;
            switch (this.name) {
                case "Bin":
                    if (esValido(bin.value, "bin")) {
                        dec.value = parseInt(value, 2).toString(10);
                        oct.value = parseInt(value, 2).toString(8);
                        hex.value = parseInt(value, 2).toString(16).toUpperCase();
                    } else {
                        dec.value = NaN;
                        oct.value = NaN;
                        hex.value = NaN;
                    }
                    break;
                case "Oct":
                    if (esValido(oct.value, "oct")) {
                        dec.value = parseInt(value, 8).toString(10);
                        bin.value = parseInt(value, 8).toString(2);
                        hex.value = parseInt(value, 8).toString(16).toUpperCase();
                    } else {
                        dec.value = NaN;
                        bin.value = NaN;
                        hex.value = NaN;
                    }
                    break;
                case "Dec":
                    if (esValido(dec.value, "dec")) {
                        bin.value = parseInt(value, 10).toString(2);
                        oct.value = parseInt(value, 10).toString(8);
                        hex.value = parseInt(value, 10).toString(16).toUpperCase();
                    } else {
                        bin.value = NaN;
                        oct.value = NaN;
                        hex.value = NaN;
                    }
                    break;
                case "Hex":
                    if (esValido(hex.value, "hex")) {
                        dec.value = parseInt(value, 16).toString(10);
                        bin.value = parseInt(value, 16).toString(2);
                        oct.value = parseInt(value, 16).toString(8);
                    } else {
                        dec.value = NaN;
                        bin.value = NaN;
                        oct.value = NaN;
                    }
                    break;
            }
        });
    });
}

/**
 * Función que calcula la suma de dos números independientemente de su sistema
 * @name suma
 */
function suma() {
    const opc = document.getElementsByName("sis")[0].value;
    const op1 = document.getElementsByName("op1")[0].value;
    const op2 = document.getElementsByName("op2")[0].value;
    const sol = document.getElementsByName("sol")[0];
    const text_sol = document.getElementsByName("text_sol")[0];
    text_sol.textContent = "";

    if (!esValido(op1, opc) || !esValido(op2, opc)) {
        text_sol.textContent = "Introduce números válidos";
    } else {
        let resultado = 0;
        switch (opc) {
            case "bin":
                resultado = (parseInt(op1, 2) + parseInt(op2, 2)).toString(2);
                break;
            case "oct":
                resultado = (parseInt(op1, 8) + parseInt(op2, 8)).toString(8);
                break;
            case "dec":
                resultado = (parseInt(op1, 10) + parseInt(op2, 10)).toString(10);
                break;
            case "hex":
                resultado = (parseInt(op1, 16) + parseInt(op2, 16)).toString(16).toUpperCase();
                break;
        }
        sol.value = resultado;
    }
}

/**
 * Función que calcula el producto de dos números independientemente de su sistema
 * @name producto
 */
function producto() {
    const opc = document.getElementsByName("sis")[0].value;
    const op1 = document.getElementsByName("op1")[0].value;
    const op2 = document.getElementsByName("op2")[0].value;
    const sol = document.getElementsByName("sol")[0];
    const text_sol = document.getElementsByName("text_sol")[0];
    text_sol.textContent = "";

    if (!esValido(op1, opc) || !esValido(op2, opc)) {
        text_sol.textContent = "Introduce números válidos";
    } else {
        let resultado = 0;
        switch (opc) {
            case "bin":
                resultado = (parseInt(op1, 2) * parseInt(op2, 2)).toString(2);
                break;
            case "oct":
                resultado = (parseInt(op1, 8) * parseInt(op2, 8)).toString(8);
                break;
            case "dec":
                resultado = (parseInt(op1, 10) * parseInt(op2, 10)).toString(10);
                break;
            case "hex":
                resultado = (parseInt(op1, 16) * parseInt(op2, 16)).toString(16).toUpperCase();
                break;
        }
        sol.value = resultado;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const labels = this.querySelectorAll("label");
    sis_num();
    const sumar = this.getElementsByName("suma")[0];
    const multiplicar = this.getElementsByName("producto")[0];
    sumar.addEventListener("click", suma);
    multiplicar.addEventListener("click", producto);
    labels[2].addEventListener("input", function () {
        const radio = document.getElementsByName("rad")[0];
        const area = document.getElementsByName("area")[0];
        const calcular_area = r => (r**2)*Math.PI;
        area.value = (esValido(radio.value, "dec")) ? 
        calcular_area(parseInt(radio.value, 10)).toFixed(4) :
        "No es un número";
    });
})