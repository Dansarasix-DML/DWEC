/**
 * @author Daniel Marín López
 * @version 0.03a
 * 
 * Array de valores variados
 */

{
    let valores = [4, "hola", false, undefined, new Date(), null, [1,2,3], 
    Infinity, function () {}, 5n, {author:"Daniel Marín"}];

    document.addEventListener("DOMContentLoaded", function () {
        const infoElement = document.getElementById('info');
        valores.forEach(element => {
            const type = typeof element;
            let mensaje = "";
            switch (type) {
                case 'object':
                    if (element instanceof Array) {
                        mensaje = `OBJETO - (true) - Array - ${JSON.stringify(element)}`;
                    } else if (element instanceof Date) {
                        mensaje = `OBJETO - (true) - Date - ${element.toString()}`;
                    } else if (element === null) {
                        mensaje = `PRIMITIVO - (true) - nulo - null`;
                    } else {
                        mensaje = `OBJETO - (true) - ${element.constructor.name} - ${JSON.stringify(element)}`;
                    }
                    infoElement.innerHTML += `<p>${mensaje}</p>`;
                    break;
                case "function":
                    let nombre = ((!element.name) ? "Anónima" : element.name);
                    mensaje = `OBJETO - (true) - ${element.constructor.name} - ${nombre}`;
                    infoElement.innerHTML += `<p>${mensaje}</p>`;
                    break;            
                default:
                    mensaje = `PRIMITIVO - ${type} - ${element}`;
                    infoElement.innerHTML += `<p>${mensaje}</p>`;
                    break;
            }
        });
    })
}