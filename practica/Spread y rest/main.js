document.addEventListener("DOMContentLoaded", function(){
    let explicacion = document.createElement("p");
    let padreExplicacion = document.getElementsByTagName('span')[0];
    let preExplicacionSpread = document.getElementsByName('ejemploSpread')[0];
    let explicacionSpread = document.createElement('p');
    let preExplicacionRest = document.getElementsByClassName('ejemploRest')[0];
    let explicacionRest = document.createElement('p')
    
    explicacion.innerHTML += "La principal diferencia es que el rest se usa a la hora de pasar el array como parámetro y querer 'trocearlo' y el spread son el resto de iteraciones";
    padreExplicacion.appendChild(explicacion);

    function explicarRest(...args){
        suma = 0;
        args.forEach(element => {
            suma += element;
        });
        return suma;
    }

    explicacionRest.innerHTML += '<h2> Explicacion Rest </h2>'
    explicacionRest.innerHTML += `
    Tenemos una función "explicarRest" que coge cada elemento que pasemos a la función lo suma y te devuelve el valor de la suma de estos (Así podemos pasarle tantos valores como queramos, que los cogerá todos como args)<br>
    En este caso ${explicarRest(1,2,3,4)} <br>

    Invocation: function(values)<br>
    Syntax: function func(...args)
    `;
    preExplicacionRest.appendChild(explicacionRest);

    let array = [1,2,3,4];
    function explicarSpread(...args){
        suma = 0;
        args.forEach(element => {
            suma += element;
        });
        return suma;
    }
    explicacionSpread.innerHTML += '<h2> Explicacion Spread </h2>'
    explicacionSpread.innerHTML += `
    Tenemos un array ${array} y una función "explicarSpread" a la que le pasamos el array, mediante el ...array todos los valores del array separados para que la función itere sobre estos<br>
    En este caso ${explicarSpread(...array)} <br>

    Invocation: function(...array)<br>
    Syntax: function func (params // ...args)
    `;
    preExplicacionSpread.appendChild(explicacionSpread)
})