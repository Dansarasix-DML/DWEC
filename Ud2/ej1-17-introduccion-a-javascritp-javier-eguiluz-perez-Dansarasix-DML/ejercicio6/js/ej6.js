/**
 * @author Daniel Marín López
 * @version 0.05a
 * 
 * Ejercicio 6
 */

/*
Mala práctica usar alert
*/

{
    document.addEventListener("DOMContentLoaded", function () {
        //Usamos getElementById para obtener los campos
        let numero = document.getElementById("numero");
        let letra = document.getElementById("letra");
        let envio = document.getElementById("Envio");
        let mensaje = document.getElementById("mensaje");
        //Usamos addEventListener para "Escuchar" el click del botón
        envio.addEventListener("click", function () {
            let DNI = numero.value;
            let DNI_Letra = letra.value;
            const letras = ['T', 'R', 'W', 'A', 'G', 
            'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        
            //let DNI = 31880329;
            //let DNI = prompt("Dime el DNI");
            if (DNI < 0 || DNI > 99999999) {
                mensaje.textContent = "DNI NO VÁLIDO";
            } else {
                let let_pos = DNI % 23;
                mensaje.textContent = (DNI_Letra === letras.at(let_pos))?
                "DNI VÁLIDO":
                "DNI NO VÁLIDO";
            }
        });

    });
}

