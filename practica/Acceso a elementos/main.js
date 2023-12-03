/**
 * @author Alejandro Abad
 */


document.addEventListener("DOMContentLoaded", function(){
    let accesoId = document.getElementById("AccesoId");
    let accesoName = document.getElementsByName("AccesoName");
    let accesoClass = document.getElementsByClassName("AccesoClase")
    let accesoDivs = document.getElementsByTagName("div")

    accesoId.innerHTML += "<br/> <p> Le añadimos un parrafo al id </p> <br/>"
    accesoName[0].innerHTML += "<br/> <p> Le añadimos un parrafo al primer name</p> <br/>"
    accesoName[1].innerHTML += "<br/> <p> Le añadimos un parrafo al segundo name</p> <br/>"
    accesoClass[0].innerHTML += "<br/> <p> Le añadimos un parrafo al class </p>"
    accesoClass[0].innerHTML += "<p> Le añadimos un segundo parrafo al class </p> <br/>"
    accesoDivs[4].innerHTML += "<p> Acceso a un div sin más </p>"
})