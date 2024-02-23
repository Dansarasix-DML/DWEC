/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 */

function crearObjeto(keys, values) {
    const object = {};

    keys.forEach((key, index) => {
        const value = values[index];
        if (value !== "") object[key] = value;
    });
    
    // console.log(object);
    return object
}

document.addEventListener("DOMContentLoaded", function () {
    let botonG = this.getElementsByName("creaGato")[0];
    const keys = ["name", "fecha_nac", "raza", "peso"];

    // let gato = null;

    botonG.addEventListener("click", function () {
        // console.log("Hola mundo");

        const values = [document.getElementsByName("nombre")[0].value,
        document.getElementsByName("fecha_nac")[0].value, 
        document.getElementsByName("raza")[0].value,
        document.getElementsByName("peso")[0].value];

        // gato = new Gato({name: nombreE, fecha_nac: fechaE, raza: razaE, peso: pesoE});
        // console.log(gato);

        const nuevaVent = window.open('', '_blank', 'width=' + 600 + ',height=' + 800 + ',top=0,left=0');
        nuevaVent.gato = new Gato(crearObjeto(keys, values));
        nuevaVent.document.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="author" content="Daniel Marín López">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="./js/vent.js"></script>
                    <title>${nuevaVent.gato.name}</title>
                </head>
                <body>
                    <span name="img"></span>
                    <br/><br/>
                    <form>
                        <label for="nombre">
                            Nombre: <input type="text" value=${nuevaVent.gato.name}>
                        </label>
                        <br/><br/>
                        <label for="fecha_nac">
                            Fecha de Nacimiento: <input type="text" value=${nuevaVent.gato.fecha_nac}>
                        </label>
                        <br/><br/>
                        <label for="peso">
                            Peso: <input type="number" name="peso" value=${nuevaVent.gato.peso}>
                        </label>
                        <br/><br/>
                        <label for="raza">
                            Raza:
                            <select name="raza" value=${nuevaVent.gato.raza}>
                                <option value="persa">Persa</option>
                                <option value="siames">Siames</option>
                                <option value="ragdoll">Ragdoll</option>
                            </select>
                        </label>
                        <br/><br/>
                        <input type="button" name="comer" value="Comer">
                        <input type="button" name="dormir" value="Dormir">
                        <input type="button" name="jugar" value="Jugar">
                        <input type="button" name="edad" value="Calcular Edad">
                    </form>
                    <br/>
                    <span name="campoEdad"></span>
                </body>
            </html>
        `);

        nuevaVent.document.close();

    })

})

class Gato {
    static #MIN_PESO = 0;
    static #MAX_PESO = 15;
    #name;
    #fecha_nac;
    #raza;
    #peso;
    #estado = true;

    constructor({name = "nombre", fecha_nac = "01-01-2000", raza = "raza", peso = 7}) {
        try {
            this.#name = name;
            this.#fecha_nac = this.formatFecha(fecha_nac);
            this.#raza = raza;
            if (Gato.#MIN_PESO < parseInt(peso)) {
                this.peso = parseInt(peso);                
            }
            else {
                this.#estado = false;
                throw new Error("Peso no válido.");
            }
        } catch (error) {
            console.error(error);
        }
    }

    formatFecha(fecha){
        let fechaOriginal = new Date(fecha);

        let dia = fechaOriginal.getDate();
        let mes = fechaOriginal.getMonth() + 1;
        let anio = fechaOriginal.getFullYear();
        
        let fechaFormateada = (dia < 10 ? '0' : '') + dia + '-' + (mes < 10 ? '0' : '') + mes + '-' + anio;
        return fechaFormateada;
    }

    calcularEdad(fecha){
        let partesFecha = fecha.split("-");
        let fechaObjeto = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
        let diferencia = new Date() - Date.parse(fechaObjeto);
        let edad = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000));
        return edad;
    }

    jugar() {
        try {
            if (!this.estado) {
                throw new Error("El gato ha muerto :(");                
            }
            let peso = this.#peso;
            if (peso-- > Gato.#MIN_PESO+1) {
                this.#peso--;
            } else {
                this.#estado = false;
            }
        } catch (error) {
            console.error(error);
        }
    }
            
    comer() {
        try {
            if (!this.estado) {
                throw new Error("El gato ha muerto :(");                
            }
            let peso = this.#peso;
            if (peso++ <= Gato.#MAX_PESO-1) {
                this.#peso++;
            } else {
                this.#estado = false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    get name(){
        return this.#name;
    }

    // set name(name){
    //     this.#name = name;
    // }

    get fecha_nac(){
        return this.#fecha_nac;
    }

    // set fecha_nac(fecha_nac){
    //     this.#fecha_nac = fecha_nac;
    // }

    get raza(){
        return this.#raza;
    }

    // set raza(raza){
    //     this.#raza = raza;
    // }

    get peso(){
        return this.#peso;
    }

    set peso(peso){
        if (peso < Gato.#MIN_PESO || peso > Gato.#MAX_PESO) {
            this.estado = false;
        }
        this.#peso = peso;
    }

    get estado(){
        return this.#estado;
    }

    set estado(estado){
        this.#estado = estado;
    }
}