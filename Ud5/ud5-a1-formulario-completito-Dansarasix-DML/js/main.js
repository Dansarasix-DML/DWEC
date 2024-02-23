/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

const Validacion = {

    flag: false,

    errores: {
        texto: "Formato incorrecto",
        checkbox: "Hay que marcar la casilla",
        radio: "Hay que seleccionar un sexo",
        juego: "Selecciona un juego",
        fecha: "Fecha no válida.",
        telefono: "Teléfono no válido. Prueba con (+34) 123 456 789,  (+1907) 123 456 789,  (34) 123 456 789, 34 123 456 789, 34.123.456.789,  123.456.789,  123456789",
        mail: "Correo electrónico no válido. Prueba con hola@adios.com, perro@sanxe.es.com, hola.pilotes@adios.com, hola.pilotes.pablete@adios.com",
        dni: "DNI no válido. Prueba con 12345678z, 12345678Z, 12345678-Z, 12345678 Z",
        url: "URL no válida. http://www.pagina.com",
        entero: "Introduce un entero",
        decimal: "Introduce un decimal"
    },
    defecto: {
        texto: "TextoDeEjemplo",
        checkbox: true,
        fecha: `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${new Date().getDate()}`,
        fecha2: `${new Date().getDate()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${new Date().getFullYear()}`,
        entero: 8,
        decimal: 8.2,
        correo: "perro@sanxe.es.com",
        url: "http://www.pagina.com",
        dni: "12345678Z",
        tlf: "123456789"
    },
    eliminaSpan: element => {if (!!element.nextElementSibling.innerText) element.nextElementSibling.innerText = "";},
    validarCampos: (reg, input, error) => {
        if (reg.test(document.getElementById(input).value)) {
            Validacion.eliminaSpan(document.getElementById(input));
            return;
        } else document.getElementById(input).nextElementSibling.innerText = error;
    },
    texto: () => {
        Validacion.validarCampos(/^[A-Za-z]+$/, "texto", Validacion.errores.texto);
    },
    tlf: () => {
        Validacion.validarCampos(/^(\(?\+?\d{1,4}\)?)?((\.|\s)?\d{3}){3}$/, "tlf", Validacion.errores.telefono);
    },
    correo: () => {
        Validacion.validarCampos(/^[a-z]+([\.-]?[a-z]+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,4})+$/, "correo", Validacion.errores.mail);
    },
    entero: () => {
        Validacion.validarCampos(/^\d+$/, "entero", Validacion.errores.entero);
    },
    decimal: () => {
        Validacion.validarCampos(/^\d+\.\d+$/, "decimal", Validacion.errores.decimal);
    },
    dni: () => {
        Validacion.validarCampos(/^\d{8}(|-|\s)?(?![iñou])[a-z]$/gi, "dni", Validacion.errores.dni);
    },
    fecha: () => {
        Validacion.eliminaSpan(document.getElementById("fecha"));
        if (isNaN(new Date(document.getElementById("fecha").value).getTime())) document.getElementById("fecha").nextElementSibling.innerText = Validacion.errores["fecha"];
    },
    fecha2: () => {
        Validacion.validarCampos(/^(\d{1,2}(-|\s|\/)?){2}\d{4}$/, "fecha2", Validacion.errores.fecha);
    },
    url: () => {
        Validacion.validarCampos(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, "url", Validacion.errores.url);
    },
    juegos: () => {
        Validacion.eliminaSpan(document.getElementById("opciones"));
        let valor = document.getElementById("opciones").value;
        if (valor == null || valor == 0 || valor == "") {
            document.getElementById("opciones").nextElementSibling.innerText = Validacion.errores["juego"];
        }
    },
    checkbox: () => {
        Validacion.eliminaSpan(document.getElementById("checkbox"));
        if (!document.getElementById("checkbox").checked) {
            document.getElementById("checkbox").nextElementSibling.innerText = Validacion.errores["checkbox"];
        }
    },
    radio: () => {
        
        let radioButton = document.getElementById("sexo");

        radioButton.querySelectorAll("input").forEach(input => {
            if (!input.checked && !Validacion.flag) {
                radioButton.nextElementSibling.innerText = Validacion.errores["radio"];
                Validacion.flag = false;
            } else Validacion.flag = true;
        });

        if (Validacion.flag && !!radioButton.nextElementSibling.innerText) {
            radioButton.nextElementSibling.innerText = "";
            return;
        }

    }


}

const valida = function(e) {
    let elementFocus = null;
    const inputs = document.getElementById("form").querySelectorAll("input");
    Validacion.juegos();
    // campos = [document.getElementById("opciones"), ...inputs];
    e.preventDefault();
    inputs.forEach(input2 => {
        if (input2.name !== "envio") {
            Validacion[input2.id];
            if (!elementFocus) {
                elementFocus = input2;
            }
            input2.focus();
        }
    });
    if (elementFocus) {
        elementFocus.focus();
    }
}

const limpia = function () {
    document.querySelector("form").querySelectorAll(input).forEach(input => {
        if (input.name != "envio") {
            input.value = "";
        }
        if (input.name == "checkbox" || input.name == "radio") {
            input.checked = false;
        }
    });
}

const rellena = function () {
    document.getElementById("masc").checked = true;
    document.getElementById("sexo").nextElementSibling.innerText = "";
    document.getElementById("opciones").value = "juego1";
    document.getElementById("opciones").nextElementSibling.innerText = "";
    for (const input in Validacion.defecto) {
        if (input == "checkbox") {
            document.getElementById(input).checked = Validacion.defecto[input];
        }
        document.getElementById(input).value = Validacion.defecto[input];
        document.getElementById(input).nextElementSibling.innerText = "";
    }
    
}

const init = function () {
    const inputs = document.getElementById("form").querySelectorAll("input");
    document.getElementById("opciones").value = "";
    inputs.forEach(input =>{
        if (input.name === "envio") {
            input.addEventListener("click", valida, true);
        } else {
            input.addEventListener("blur", Validacion[input.id]);
            input.addEventListener("focus", function () {
                Validacion.eliminaSpan(input);
            })
        }
    });

    document.getElementById("masc").addEventListener("blur", Validacion["radio"]);
    document.getElementById("fem").addEventListener("blur", Validacion["radio"]);
    document.getElementById("opciones").addEventListener("blur", Validacion["juegos"]);

    document.getElementById("masc").addEventListener("focus", function () {
        Validacion.eliminaSpan(document.getElementById("sexo"));
    });
    document.getElementById("fem").addEventListener("focus", function () {
        Validacion.eliminaSpan(document.getElementById("sexo"));
    });
    document.getElementById("opciones").addEventListener("focus", function () {
        Validacion.eliminaSpan(document.getElementById("opciones"));
    });

    document.getElementById("form").querySelectorAll("button").forEach(button => {
        if (button.name === "rellena") {
            button.addEventListener("click", function(e) {
                e.preventDefault();
                rellena();
            });
        } else {
            button.addEventListener("click", limpia);
        }
    });

}

document.addEventListener("DOMContentLoaded", init);