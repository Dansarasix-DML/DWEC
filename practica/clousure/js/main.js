/**
 * @author Daniel Marín López
 * @version 0.01a
 */

function potencia(exp) {
    return function (base) {
        return base**exp;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const parraf = this.getElementsByTagName("p");
    const potencias = [potencia(2), potencia(3), potencia(5), potencia(1/2), potencia(1/3)];

    parraf[0].innerHTML = `Los closures son funciones que manejan variables independientes.<br/>
    En otras palabras, la función definida en el closure “recuerda” el entorno en el que se ha creado.
    <br/><br/>
    Una clausura o closure es una función que guarda referencias del estado en el contexto de creación<br/>
    (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior<br/>
    desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
    <br/><br/>
    En términos sencillos, la función "recuerda" el entorno en el que fue creada. Esto significa que<br/>
    puede acceder a las variables que estaban en su alcance cuando se creó, incluso si esas variables ya<br/>
    no están en el alcance actual.
    <br/><br/>
    Tenemos la función potencia que recibe el exponente de la potencia y devuelve una función con el exponente<br/>
    accesible, por eso al hacer exp2(2) sale 4 y con exp5(2) sale 10. Con esto hacemos encapsulamiento, funciones<br/>
    de fábrica y emulaciones de variables privadas.<br/><br/>`;

    potencias.forEach(exp => {
        parraf[0].innerHTML += `${exp(2)}<br/>`;
    });

    parraf[0].innerHTML += `<br/>Hemos hecho las potencias con exponentes 2, 3, 5, 1/2 y 1/3 y luego le<br/>
    hemos pasado la base 2.`;


})