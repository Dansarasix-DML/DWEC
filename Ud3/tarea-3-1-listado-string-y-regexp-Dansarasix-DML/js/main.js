/**
 * @author Daniel Marín López
 * @version 0.01a
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", function () {
    const cap = this.getElementsByName("cap")[0];
    let text_cap = this.getElementById("text_cap");
    cap.addEventListener("blur", function () {
        text_cap.textContent = this.value.replace(/\b[a-z]/g, match => match.toUpperCase());
    });
    const inv = this.getElementsByName("inv")[0];
    let text_inv = this.getElementById("text_inv");
    inv.addEventListener("blur", function () {
        text_inv.textContent = this.value.replace(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g,( match => match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()));
    });
    const cam1 = this.getElementsByName("cam1")[0];
    let text_cam1 = this.getElementById("text_cam1");
    cam1.addEventListener("blur", function () {
        text_cam1.textContent = this.value.replace(/\s([a-z])/g, (_, caracter) => caracter.toUpperCase());
    });
    const cam2 = this.getElementsByName("cam2")[0];
    let text_cam2 = this.getElementById("text_cam2");
    cam2.addEventListener("blur", function () {
        text_cam2.textContent = this.value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z])/g, "$1 $2").toLowerCase();
    });
    const cam3 = this.getElementsByName("cam3")[0];
    let text_cam3 = this.getElementById("text_cam3");
    cam3.addEventListener("blur", function () {
        text_cam3.textContent = this.value.replace(/[A-Z]/g, match => match.toLowerCase()).replace(/_([a-z])/g,  (_, caracter) => caracter.toUpperCase());
    });
    const css = this.getElementsByName("css")[0];
    let text_css = this.getElementById("text_css");
    css.addEventListener("blur", function () {
        text_css.textContent = this.value.replace(/[A-Z]/g, match => match.toLowerCase()).replace(/_/g, "-");
    });
    const fin1 = this.getElementsByName("fin1")[0];
    const fin2 = this.getElementsByName("fin2")[0];
    let text_fin = this.getElementById("text_fin");
    fin1.addEventListener("blur", function () {
        const fin1_val = new String(fin1.value);
        fin2.addEventListener("blur", function () {
            text_fin.textContent = fin1_val.endsWith(this.value) ? "Sí" : "No";
        });
    });
    const com1 = this.getElementsByName("com1")[0];
    const com2 = this.getElementsByName("com2")[0];
    let text_com = this.getElementById("text_com");
    com1.addEventListener("blur", function () {
        const com1_val = new String(com1.value);
        com2.addEventListener("blur", function () {
            text_com.textContent = com1_val.startsWith(this.value) ? "Sí" : "No";
        });
    });
    const dni = this.getElementsByName("dni")[0];
    let text_dni = this.getElementById("text_dni");
    dni.addEventListener("blur", function () {
        const dni_exp = /^(\d{8})(?![iñou])([a-z])$/gi;
        let letra = this.value.substring((this.value.length)-1, (this.value.length));
        let num = new Number(this.value.substring((this.value.length)-9, (this.value.length)-1));
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
        const dni_con = dni_exp.test(this.value) && (letra.toUpperCase() === letras[num%23]);
        text_dni.textContent = dni_con ? "DNI VÁLIDO" : "DNI NO VÁLIDO";
    });
    const mat = this.getElementsByName("mat")[0];
    let text_mat = this.getElementById("text_mat");
    mat.addEventListener("blur", function () {
        const mat_exp = /(\d{4})(\s|-|)(?![AEIOUQÑ])([A-Z]{3})/g;
        let mats = [];
        let it_mat = mat.value.matchAll(mat_exp);
        let Mat = "";
        for (const value of it_mat) {
            // [MAT] = value;
            [,,,Mat] = value;
            mats.push(Mat);
        }
        text_mat.textContent = mats.join(", ");
    });
    const post = this.getElementsByName("post")[0];
    let text_post = this.getElementById("text_post");
    post.addEventListener("blur", function () {
        const post_exp = /([0-4][1-9]|5[1-2])([0-9]{2}[1-9])/g;
        let posts = [];
        const lineas_post = this.value.split("\n");
        for (const linea of lineas_post) {
            let post = linea.match(post_exp);
            if (post){
                posts.push(post);
            }
        }
        text_post.textContent = posts.join(", ");
    });
    const mac = this.getElementsByName("mac")[0];
    let text_mac = this.getElementById("text_mac");
    mac.addEventListener("blur", function () {
        const mac_exp = /^[0-9a-f]{2}([:-]?)([0-9a-f]{2}(\1)){4}[0-9a-f]{2}$/i;
        text_mac.textContent = mac_exp.test(this.value.trim()) ? "MAC VÁLIDA" : "MAC NO VÁLIDA";
    });
    const ip = this.getElementsByName("ip")[0];
    let text_ip = this.getElementById("text_ip");
    ip.addEventListener("blur", function () {
        const ip_exp = new RegExp("\b(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)" + 
        "(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}\b");
        text_ip.textContent = ip_exp.test(ip_val) ? "IP VÁLIDA" : "IP NO VÁLIDA";
    });
    const envio = this.getElementsByName("envio")[0];
})