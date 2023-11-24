/**
 * @author Daniel Marín López
 * 
 * @version 0.01a
 */

document.addEventListener("DOMContentLoaded", function () {
    const url_resp = this.getElementsByName("url_resp")[0];
    
    url_resp.innerHTML = `protocolo: ${window.location.protocol}<br/>
    host: ${window.location.host}<br/>
    ruta: ${window.location.pathname}<br/>
    parametros: ${window.location.search}`;
})