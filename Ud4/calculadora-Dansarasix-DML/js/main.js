/**
 * @author Daniel Marín López
 * @version 1.01b
 * 
 */

{
    const newCalculator = {

        //Propiedades/Atributos
        input: null,
        elementos: ["CE", "←", "%", "+", "7", "8", "9", "-", 
        "4", "5", "6", "x", "1", "2", "3", "÷", "0", "±", ".", "="],
        acumulador: 0,
        firstTime: true,
        lastOperator: "",
        isActive: false,
        
        //Operaciones soportadas
        suma: (x, y=0) => x + y,
        // resta: (x, y=0) => x - y,
        producto: (x, y=1) => x * y,
        // cociente: (x, y=1) => x / y,
        modulo: (x, y) => x % y,

        almacenado(op){
            newCalculator.input.value = newCalculator.acumulador;
            newCalculator.lastOperator = op;
            newCalculator.isActive = true;
        },
    
        operar(valor){

            let operando1 = newCalculator.acumulador;
            let operando2 = parseFloat(newCalculator.input.value);

            switch (valor) {
                case "+":
                    if (!!newCalculator.lastOperator && newCalculator.lastOperator != "+") {
                        newCalculator.operar(newCalculator.lastOperator);
                        newCalculator.lastOperator = "+";
                    } else newCalculator.acumulador = (newCalculator.acumulador === 0 && newCalculator.firstTime) ? 
                    newCalculator.suma(operando2): 
                    newCalculator.suma(operando1, operando2);

                    newCalculator.almacenado("+");

                    break;
                case "-":
                    // if (!newCalculator.firstTime) {
                    //     operando2 = operando2*(-1)
                    // } else newCalculator.firstTime = false;
                    if (!!newCalculator.lastOperator && newCalculator.lastOperator != "-") {
                        newCalculator.operar(newCalculator.lastOperator);
                        newCalculator.lastOperator = "-";
                    } else newCalculator.acumulador = (newCalculator.acumulador === 0 && newCalculator.firstTime) ? 
                    newCalculator.suma(operando2): 
                    newCalculator.suma(operando1, operando2*(-1));
                    if (newCalculator.firstTime) newCalculator.firstTime = false;
                    newCalculator.almacenado("-");

                    break;
                case "x":
                    if (!!newCalculator.lastOperator && newCalculator.lastOperator != "x") {
                        newCalculator.operar(newCalculator.lastOperator);
                        newCalculator.lastOperator = "x";
                    } else newCalculator.acumulador = (newCalculator.acumulador === 0 && newCalculator.firstTime) ? 
                    newCalculator.acumulador = newCalculator.producto(operando2): 
                    newCalculator.producto(operando1, operando2);

                    newCalculator.almacenado("x");

                    break;
                case "÷":
                    if (!!newCalculator.lastOperator && newCalculator.lastOperator != "÷") {
                        newCalculator.operar(newCalculator.lastOperator);
                        newCalculator.lastOperator = "÷";
                    } else newCalculator.acumulador = (newCalculator.acumulador === 0 && newCalculator.firstTime) ? 
                    newCalculator.acumulador = newCalculator.producto(operando2): 
                    newCalculator.producto(operando1, operando2**(-1));
                    
                    newCalculator.almacenado("÷");
                    
                    break;
                default:
                    if (!!newCalculator.lastOperator && newCalculator.lastOperator != "%") {
                        newCalculator.operar(newCalculator.lastOperator);
                        newCalculator.lastOperator = "%";
                    } else newCalculator.acumulador = (newCalculator.acumulador === 0 && newCalculator.firstTime) ? 
                    newCalculator.acumulador = newCalculator.modulo(operando2, operando2+1):
                    newCalculator.modulo(operando1, operando2);
                    
                    newCalculator.almacenado("%");

                    break;
            }
        },
    
        reseteo(){
            newCalculator.input.value = "0";
            newCalculator.acumulador = 0;
            newCalculator.lastOperator = "";
            newCalculator.isActive = false;
        },
    
        cambioSigno(){
            if (newCalculator.input.value !== "0" && newCalculator.input.value !== "0.") {
                newCalculator.input.value = String(parseFloat(newCalculator.input.value) * -1);
            } else newCalculator.input.value = "0";
        },
    
        borrado(){
            if (newCalculator.input.value.length !== 1) {
                newCalculator.input.value = newCalculator.input.value.slice(0, -1);
            } else newCalculator.input.value = "0";
            if (newCalculator.input.value === "-" ) newCalculator.input.value = "0";
    
        },
    
        setIgual(){
            if (!newCalculator.isActive) {
                newCalculator.operar(newCalculator.lastOperator);
                newCalculator.input.value = String(newCalculator.acumulador);
                newCalculator.acumulador = 0 //Reseteado para que no opere por si mismo
                newCalculator.lastOperator = "";
                newCalculator.isActive = false;
            }
        },
    
        generateBehaviour(valor){
            if (/[1-9]/.test(valor)) {
                return () => {
                    if (newCalculator.input.value === "0" || this.isActive){
                        newCalculator.input.value = valor;
                        newCalculator.isActive = false;
                    } else newCalculator.input.value = newCalculator.input.value + valor;
                };
            }
            switch (valor) {
                case "0":
                    return () => {
                        const puntoDecimalPresente = newCalculator.input.value.includes(".");
    
                        if (puntoDecimalPresente || newCalculator.input.value !== "0" || !this.isActive) {
                            newCalculator.input.value = newCalculator.input.value + valor;
                        }
                    }
                case ".":
                    return () => {
                        const puntoDecimalPresente = newCalculator.input.value.includes(".");
    
                        if (!newCalculator.isActive) {
                            if (newCalculator.input.value === "0") {
                                newCalculator.input.value = "0.";
                            } else if (!puntoDecimalPresente) newCalculator.input.value = newCalculator.input.value + valor;
                        }
    
                    }
                case "CE":
                    return newCalculator.reseteo;
                case "±":
                    return newCalculator.cambioSigno;
                case "←":
                    return newCalculator.borrado;
                case "=":
                    return newCalculator.setIgual;
                default:
                    return () => {
                        if (!newCalculator.isActive) {
                            newCalculator.operar(valor);                        
                        }
                    }
            }
        },
    
        //Métodos para mostrar la calculadora
        crearBotones(array) {
            const linea = document.createElement("div");
            array.forEach(element => {
                const boton = document.createElement("input");
                boton.type = "button";
                boton.value = element;
                boton.classList.add("boton");
                linea.append(boton);
                //Añadimos el click pasandole el value del botón
                boton.addEventListener("click", newCalculator.generateBehaviour(element));
            });
            return linea;
        },
        display() {
            const body = document.body;
            const cuerpo = document.createElement("div");
            //Refactorizar
            // const input = document.createElement("input");
            newCalculator.input = document.createElement("input");
            newCalculator.input.type = "text";
            newCalculator.input.value = 0;
            newCalculator.input.disabled = true;
            newCalculator.input.classList.add("salida");
            cuerpo.appendChild(newCalculator.input);
            newCalculator.elementos.forEach((element, index) => {
                //Añado una línea por cada 4 botones
                if (index%4 === 0) {
                    let min_ele = [newCalculator.elementos[index], newCalculator.elementos[index+1], 
                    newCalculator.elementos[index+2], newCalculator.elementos[index+3]];
                    let linea = newCalculator.crearBotones(min_ele);
                    cuerpo.appendChild(linea);
                }
            })
            cuerpo.classList.add("cuerpo");
            body.appendChild(cuerpo);
        }
    }
    
    document.addEventListener("DOMContentLoaded", function (){
        // calculadora.display();
        newCalculator.display();
    
    })    

}
