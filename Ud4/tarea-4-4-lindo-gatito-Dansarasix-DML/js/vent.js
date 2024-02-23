/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

function muerte() {
    document.getElementsByName("comer")[0].disabled = true;
    document.getElementsByName("jugar")[0].disabled = true;
    document.getElementsByName("dormir")[0].disabled = true;
    document.getElementsByName("edad")[0].disabled = true;
    document.getElementsByName("campoEdad")[0].innerHTML = "El gato ha muerto :(";
}

function estado(img) {
    try {
        if (!gato.estado) {
            muerte();
            document.getElementsByName("img")[0].innerHTML = `<img src="./img/gato-muerto.jpg" alt="gato-muerto" width="350">`;
            throw new Error("El gato ha muerto :(");
        } else {
            document.getElementsByName("img")[0].innerHTML = img;
        };
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputs = this.querySelectorAll("input");
    const select = this.getElementsByTagName("select")[0];
    const campoPeso = this.getElementsByName("peso")[0];

    const campoEdad = this.getElementsByName("campoEdad")[0];

    estado(`<img src="./img/gato-jugando.jpg" alt="gato-jugando" width="250">`);

    let botonC = this.getElementsByName("comer")[0];
    let botonJ = this.getElementsByName("jugar")[0];
    let botonD = this.getElementsByName("dormir")[0];
    let botonE = this.getElementsByName("edad")[0];

    botonC.addEventListener("click", function () {
        gato.comer();
        campoPeso.value = gato.peso;
        campoEdad.innerHTML = "";
        estado(`<img src="./img/gato-come.jpg" alt="gato-come" width="350">`);
    });

    botonJ.addEventListener("click", function () {
        gato.jugar();
        campoPeso.value = gato.peso;
        campoEdad.innerHTML = "";
        estado(`<img src="./img/gato-jugando.jpg" alt="gato-jugando" width="250">`);
    })
    botonD.addEventListener("click", function () {
        campoEdad.innerHTML = "Durmiendo..."
        estado(`<img src="./img/gato-duerme.jpg" alt="gato-duerme" width="250">`);
    })

    botonE.addEventListener("click", function () {
        campoEdad.innerHTML = `Edad: ${gato.calcularEdad(gato.fecha_nac)} años`;
    });

    inputs.forEach(input => {
        if (input.type !== "button") input.disabled = true;
    });

    select.disabled = true;
})