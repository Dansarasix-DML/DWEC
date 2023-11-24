/**
 * @author Daniel Marín López
 * 
 * @version 0.010
 */

document.addEventListener("DOMContentLoaded", function () {
    const eje1 = this.getElementsByName("ejercicio1")[0];
    const eje2 = this.getElementsByName("ejercicio2")[0];
    const eje3 = this.getElementsByName("ejercicio3")[0];
    const eje4 = this.getElementsByName("ejercicio4")[0];
    const eje5 = this.getElementsByName("ejercicio5")[0];
    const eje6 = this.getElementsByName("ejercicio6")[0];
    const eje7 = this.getElementsByName("ejercicio7")[0];
    const eje8 = this.getElementsByName("ejercicio8")[0];
    const eje9 = this.getElementsByName("ejercicio9")[0];
    const eje10 = this.getElementsByName("ejercicio10")[0];
    const eje11 = this.getElementsByName("ejercicio11")[0];
    let array = [1, 2, 3, 4, 4];
    let array2 = [1, 2, NaN, 4, 4];
    let set1 = new Set(array);
    let set3 = new Set(array2);
    eje1.innerHTML = `Array: [${array}]<br/>
    Set: (${Array.from(set1)})`
    let set2 = new Set();
    eje2.innerHTML = `Set: (${Array.from(set2.add(11).add(22))})`;
    eje3.innerHTML = `<b>Usamos el método has()</b>:<br/>
    ¿Está el valor 22? - ${(set2.has(22) ? "Sí":"No")}<br/>
    ¿Está el valor 33? - ${(set2.has(33) ? "Sí":"No")}<br/>
    <b>Usamos el método Array.from()</b>:<br/>
    Accedemos al valor en posición 1: ${Array.from(set2)[1]}`;
    eje4.innerHTML = `<ul>
    <li><b>Búsqueda de elementos</b>: Los sets disponen del método has().</br>
    para buscar elementos que devolverá true si los encuentra. Los array tienen</br>
    el método find(),every(), some(), etc. que devolverán elementos o índices.</br>
    Usamos find sobre un array para que devuelva 3:</br>
    ${array.find(value => value === 3)}</br>
    Usamos has sobre un set para que devuelva true si está 3:</br>
    ${set1.has(3)}
    </li>
    <li><b>Eliminación de elementos</b>: Para eliminar elementos en un set usamos</br>
    el método delete(), mientras que con un array tenemos los metodos pop() y shift().</br>
    Eliminando valores en un array con shift():</br>
    Valor eliminado: ${array.shift()}</br>
    Array resultante: [${array}]</br>
    Eliminando valores en un set con delete():</br>
    ¿Se ha eliminado el valor? ${set1.delete(2) ? "Sí":"No"}</br>
    Set resultante: (${Array.from(set1)})</br>
    </li>
    <li><b>Búsqueda del elemento NaN</b>: Para buscar un NaN se puede usar la función</br>
    isNaN() junto a includes() y has() para buscar en un array y en un set respectivamente.</br>
    Array con includes() + isNaN:</br>
    ¿Hay un NaN en el array2? ${array2.includes(NaN) ? "Sí" : "No"}</br>
    Usamos has sobre un set para que devuelva true si está NaN: ${set3.has(NaN)}
    </li>
    <li><b>Control de duplicados</b>: Mientras que un array permite elementos duplicados,</br>
    un set no permitirá ningún duplicado.</br>
    Array: [${array}]<br/>
    Set: (${Array.from(set1)})</li>
    </ul>`;
    let alumnos = new Set();
    alumnos.add("María");
    alumnos.add("Pepe");
    alumnos.add("Laura");
    alumnos.add("María");
    eje5.innerHTML += "Imprimimos el set de alumnos repetidos.</br>"
    for (const iterator of alumnos) {
        eje5.innerHTML += `${iterator}</br>`;
    }
    let array3 = [
        {materia: "DWEC", profesor: "Lourdes Margarín"},
        {materia: "DWES", profesor: "Jose Aguilera"},
        {materia: "DeAW", profesor: "Carmen Tripiana"}

    ];
    let map1 = new Map(array3.map(obj => [obj.materia, obj.profesor]));
    let claves = Array.from(map1.keys());
    let valores = Array.from(map1.values());
    let objetos = Array.from(map1.entries());
    eje6.innerHTML += "Creamos un array con tres objetos dentro.</br>";
    eje6.innerHTML += `array3 = [${array3}]</br>`;
    eje6.innerHTML += "Ahora creamos un Map usando el método Array.map().</br>";
    eje6.innerHTML += `map1 = ${map1}</br>`;
    eje6.innerHTML += "Y por último hacemos arrays para guardar <i>las keys, los values y los entries</i>.</br>";
    eje6.innerHTML += `claves = [${claves}]</br>`;
    eje6.innerHTML += `valores = [${valores}]</br>`;
    eje6.innerHTML += `objetos = [${objetos}]</br>`;
    let map2 = new Map();
    map2.set("cadena", "Valor de clave cadena");
    map2.set(null, "Valor de clave nulo");
    map2.set(NaN, "Valor de clave NaN");
    map2.set(function simple(){}, "Valor de clave función");
    eje7.innerHTML += `Entries de map2: [${Array.from(map2.entries())}]`;
    const alumnosAusentes = new Map();
    alumnosAusentes.set('Juan', true);
    alumnosAusentes.set('María', false);
    alumnosAusentes.set('Pedro', true);
    alumnosAusentes.set('María', true);
    
    eje8.innerHTML += 'Alumnos Ausentes:<br/>';
    alumnosAusentes.forEach((estado, alumno) => {
        eje8.innerHTML += `${alumno}: ${estado ? 'Ausente' : 'Presente'}<br/>`;
    });
    let numeros = [1, 2, 3, 4, 4, 5, 6 ,6];
    const quitaLosRepes = (array) => Array.from(new Set(array));
    eje9.innerHTML += `Array normal: [${numeros}]<br/>`;
    eje9.innerHTML += `Array sin valores repetidos: [${quitaLosRepes(numeros)}]`;

    const weakset1 = new WeakSet();
    const player = {};
    const valores2 = [2, new String("hola"), "mundo", true, new Number(12), player];

    valores2.forEach(element => {
        eje10.innerHTML += `Elemento: ${element}.<br/>`;
        try {
            weakset1.add(element);
            eje10.innerHTML += `Elemento añadido: ${element}.<br/>`;
        } catch (error) {
            eje10.innerHTML += `Se capturó una excepción: <b>${error}</b>.<br/>`;
        }
    });

    eje10.innerHTML += `<br/>¿Está player? ${(weakset1.has(valores2[5]))?"Sí":"No"}<br/>`;
    eje10.innerHTML += `¿Está new Number(12)? ${(weakset1.has(valores2[4]))?"Sí":"No"}<br/>`;
    eje10.innerHTML += `¿Está 2? ${(weakset1.has(valores2[0]))?"Sí":"No"}<br/>`;

    const weakmap1 = new WeakMap();
    const clave1 = { id: 1 };
    const clave2 = { id: 2 };
    const valor1 = 'valor1';
    const valor2 = 'valor2';

    weakmap1.set(clave1, valor1);
    weakmap1.set(clave2, valor2);

    try {
        for (const iterator of weakset1) {
            eje11.innerHTML += `${iterator}`;
        }
    } catch (error) {
        eje11.innerHTML += `Se capturó una excepción: <b>${error}</b>.<br/>`;
    }

    try {
        for (const iterator of weakmap1) {
            eje11.innerHTML += `${iterator}`;
        }
    } catch (error) {
        eje11.innerHTML += `Se capturó una excepción: <b>${error}</b>.<br/>`;
    }

})