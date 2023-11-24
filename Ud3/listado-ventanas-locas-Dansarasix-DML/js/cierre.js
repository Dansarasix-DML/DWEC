/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

document.addEventListener("DOMContentLoaded", function(){
    const cierre = this.getElementsByName("cierre")[0];
    cierre.addEventListener("click", function(){
        window.close();
    });
})