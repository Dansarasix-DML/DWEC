/**
 * @author Alejandro Abad
 */
document.addEventListener("DOMContentLoaded", function(){
    let Productos = ['Banana', 'Pera', 'Sandia'];
    let lista = document.createElement("ul");
    document.body.appendChild(lista);
    Productos.forEach(element => {
        mostrarProducto(element);
    });
    function mostrarProducto(element){
        let li = document.createElement("li");
        lista.appendChild(li);
        li.innerHTML += element
    }
})
