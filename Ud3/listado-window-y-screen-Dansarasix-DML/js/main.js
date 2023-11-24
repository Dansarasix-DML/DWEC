/**
 * @author Daniel Marín López
 * 
 * @version 0.01a
 */

function crearLista(item, texto1, texto2) {
    const sub = document.createElement("ul");
    const sub_item_1 = document.createElement('li');
    const sub_item_2 = document.createElement('li');
    sub_item_1.textContent = texto1;
    sub_item_2.textContent = texto2;
    sub.appendChild(sub_item_1);
    sub.appendChild(sub_item_2);
    item.appendChild(sub);
}

function ventanaURL() {
    const vent = document.getElementsByName("url")[0];
    vent.addEventListener("click", function (){
        nuevavent = window.open('', '_blank', 'width=' + 300 + ',height=' + 200 + ',top=0,left=0');

        nuevavent.document.write("<!DOCTYPE html>");
        nuevavent.document.write("<html lang=\"en\">");
        nuevavent.document.write("<head>");
        nuevavent.document.write("<meta charset=\"UTF-8\">");
        nuevavent.document.write("<meta name=\"author\" content=\"Daniel Marín López\">");
        nuevavent.document.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        nuevavent.document.write("<script src=\"./js/url.js\"></script>");
        nuevavent.document.write("<title>Decodificador de URLs</title>");
        nuevavent.document.write("</head>");
        nuevavent.document.write("<body>");
        nuevavent.document.write("<p name=\"url_resp\"></p>");
        nuevavent.document.write(`</body>`);
        nuevavent.document.write(`</html>`);
        nuevavent.document.close();
    });
}

function ventanaReloj() {
    const vent = document.getElementsByName("reloj")[0];
    vent.addEventListener("click", function (){
        nuevavent = window.open('', '_blank', 'width=' + 300 + ',height=' + 200 + ',top=0,left=0');

        nuevavent.document.write("<!DOCTYPE html>");
        nuevavent.document.write("<html lang=\"en\">");
        nuevavent.document.write("<head>");
        nuevavent.document.write("<meta charset=\"UTF-8\">");
        nuevavent.document.write("<meta name=\"author\" content=\"Daniel Marín López\">");
        nuevavent.document.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        nuevavent.document.write("<script src=\"./js/reloj.js\"></script>");
        nuevavent.document.write("<title>El tiempo es oro</title>");
        nuevavent.document.write("</head>");
        nuevavent.document.write("<body>");
        nuevavent.document.write("<p name=\"reloj\"></p>");
        nuevavent.document.write(`</body>`);
        nuevavent.document.write(`</html>`);
        nuevavent.document.close();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const eje1 = this.getElementsByName("ejecicio1")[0];
    const listaOrdenada = this.createElement('ol');
    const item1 = this.createElement('li');
    item1.textContent = `window.outerHeight: ${window.outerHeight}`;
    crearLista(item1, `Descripción: Devuelve la altura exterior de la ventana del navegador,
    incluyendo barras de herramientas, menús desplegables y bordes.`,
    "Diferencia: Incluye la interfaz de usuario completa del navegador.");
    const item2 = this.createElement('li');
    item2.textContent = `window.innerHeight: ${window.innerHeight}`;
    crearLista(item2, `Descripción: Devuelve la altura interior de la ventana del navegador, 
    excluyendo las barras de herramientas y la interfaz del navegador.`,
    "Diferencia: Excluye la interfaz de usuario y proporciona solo la altura del contenido visible.");
    const item3 = this.createElement('li');
    item3.textContent = `window.screen.availHeight: ${window.screen.availHeight}`;
    crearLista(item3, `Descripción: Devuelve la altura disponible en la pantalla del dispositivo.`,
    `Diferencia: Esta propiedad tiene en cuenta las barras de tareas u otras interfaces 
    del sistema operativo que puedan ocupar espacio en la pantalla.`);
    const item4 = this.createElement('li');
    item4.textContent = `window.screen.height: ${window.screen.height}`;
    crearLista(item4, `Descripción: Devuelve la altura total de la pantalla del dispositivo.`,
    `Diferencia: Incluye la altura total de la pantalla, incluso si parte de 
    ella está cubierta por barras de tareas u otras interfaces del sistema operativo.`);
    listaOrdenada.appendChild(item1);
    listaOrdenada.appendChild(item2);
    listaOrdenada.appendChild(item3);
    listaOrdenada.appendChild(item4);
    eje1.appendChild(listaOrdenada);

    ventanaURL();

    ventanaReloj();
})