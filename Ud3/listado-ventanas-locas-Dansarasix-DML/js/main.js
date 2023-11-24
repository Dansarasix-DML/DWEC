/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

document.addEventListener("DOMContentLoaded", function() {
    const vent = this.getElementsByName("ventana")[0];
    const multvents = this.getElementsByName("multvents")[0];
    const cerrvents = this.getElementsByName("cerrvents")[0];
    const sp_error = this.getElementsByName("error")[0];
    let ventanas = [];
    vent.addEventListener("click", function (){
        nuevavent = window.open('', '_blank', 'width=' + 300 + ',height=' + 200 + ',top=0,left=0');
        
        nuevavent.document.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="author" content="Daniel Marín López">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Nueva Ventana</title>
                </head>
                <body>
                    <p>Se han utilizado las siguientes propiedades:<br/></p>
                    <p>height=200<br/></p>
                    <p>width=300<br/></p>
                </body>
            </html>
        `);

        nuevavent.document.close();
    });

    multvents.addEventListener("click", function() {
        let top = -10; 
        let left = -10;
        for (let i = 0; i < 5; i++) {
            let nuevavent = `vent_${i}`;
            nuevavent = window.open('','_blank',`width=200,height=200,top=${top+=10},left=${left+=10}`);
            
            nuevavent.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="author" content="Daniel Marín López">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <script src="./js/cierre.js"></script>
                        <title>Ventana ${i}</title>
                    </head>
                    <body>
                        <p>Ventana ${i} <input type="button" name="cierre" value="cerrar"></p>
                    </body>
                </html>
            `);
            nuevavent.document.close();
            ventanas.push(nuevavent);
        }
    });

    cerrvents.addEventListener("click", function () {
        try {
            ventanas.forEach(ventana => {
                ventana.close();
            });
            ventanas.splice(0, ventanas.length);
        } catch (error) {
            sp_error.innerHTML += `Error capturado: ${error}`;
        }
    })
})