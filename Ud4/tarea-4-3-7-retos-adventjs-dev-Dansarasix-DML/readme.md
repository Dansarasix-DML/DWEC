# Retos adventjs
### Daniel Marín López
---
1. Reto 1
2. Reto 2
3. Reto 3
4. Reto 4
5. Reto 5
6. Reto 6
7. Reto 7

---

### [Reto 1](https://2021.adventjs.dev/challenges/01)

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

```js
export default function contarOvejas(ovejas) {
  return ovejas.filter(({name, color}) => (color == "rojo" && 
  name.search(/na/gi) != -1));
}
```

### [Reto 2](https://2021.adventjs.dev/challenges/02)

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

```js
export default function listGifts(letter) {
  const palabras = letter.trim().split(/\s+/);
  const regalos = {};
  palabras.forEach(palabra => {
    if (!palabra.startsWith("_")){
        const regalo = palabra;
        if (regalos.hasOwnProperty(regalo)) {
          regalos[regalo]++;
        } else {
          regalos[regalo] = 1;
        }
    }
  });

  return regalos; 
}
```

### [Reto 3](https://2021.adventjs.dev/challenges/03)

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

```js
export default function isValid(carta) {
  const pila = [];

  const parValido = (apertura, cierre) => {
    return (apertura === '(' && cierre === ')') ||
           (apertura === '{' && cierre === '}') ||
           (apertura === '[' && cierre === ']');
  };

  return carta.split('').every(caracter => {
    if ('({['.includes(caracter)) {
      pila.push(caracter);
    } else if (')]}'.includes(caracter)) {
      const apertura = pila.pop();
      if (!parValido(apertura, caracter)) {
        return false;
      }
    }
    return true;
  }) && pila.length === 0 && !carta.includes("()");
}
```

### [Reto 4](https://2021.adventjs.dev/challenges/04)

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

```js
export default function createXmasTree(altura) {
  if (altura < 1 || altura > 100) {
    return "La altura debe estar en el rango de 1 a 100";
  }

  const arbol = Array.from({ length: altura }, (_, i) => {
    const asteriscos = `_`.repeat(altura - i - 1) + "*".repeat(2 * i + 1) + `_`.repeat(altura - i - 1);
    return `${asteriscos}`;
  });

  const tronco = `_`.repeat(altura - 1) + `#`.repeat(1) + `_`.repeat(altura - 1);
  return [...arbol, tronco, tronco].join("\n");
}
```

### [Reto 5](https://2021.adventjs.dev/challenges/05)

Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

```js
export default function daysToXmas(date) {
  const referenceDate = new Date('Dec 25, 2023');

  const timeDiff = referenceDate - date;

  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff; 
}
```

### [Reto 6](https://2021.adventjs.dev/challenges/06)

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

```js
export default function sumPairs(numbers, result) {
  let next = 1;
    for (const num1 of numbers) {
        let rest = numbers.slice(next++);
        let ind = rest.findIndex(num2 => num1 + num2 === result);
        if (ind !== -1) return [num1, rest[ind]];
    }
    return null
}
```

### [Reto 7](https://2021.adventjs.dev/challenges/07)

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

```js
export default function contains(store, product) {
  for (const property in store) {
    if (typeof store[property] === 'string' && store[property] === product) {
      return true;
    }
    if (typeof store[property] === 'object') {
      if (contains(store[property], product)) return true;
    }
  }
  return false
}
```