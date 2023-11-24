/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * Ejercicio 3
 */

/*
Mala práctica usar alert
alert("¡Hola Mundo!");
*/

{
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octumbre", "Noviembre", "Diciembre"];

    /**
     * Bucles para imprimir los meses
     * Foreach
     */
    meses.forEach(element => {
        console.log(element);
    });

    //For clásico
    for (let index = 0; index < meses.length; index++) {
        const element = meses[index];
        console.log(element);        
    }

    //For of
    for (const mes of meses) {
        console.log(mes); 
    }

    
}