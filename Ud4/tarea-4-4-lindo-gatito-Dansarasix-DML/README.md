[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Z0yhUW1k)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13396103&assignment_repo_type=AssignmentRepo)
# Lindo gatito. ES2015+ (class, constructor, set, get, static, extends...)


## Prototipos

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. 

JavaScript es un lenguaje basado en prototipos: para proporcionar mecanismos de herencia, los objetos tienen un objeto prototipo, el cual actúa como un objeto plantilla que hereda métodos y propiedades.

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la cadena de prototipos, y explica por qué objetos diferentes pueden tener disponibles propiedades y métodos definidos en otros objetos.


## Clases

Las clases de javascript fueron introducidas en ECMAScript 2015. Son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia. Es meramente azúcar sintáctico (Sugar Syntax) porque en JavaScript no hay clases, hay prototipos.


## Entrega

Trabajaremos con la POO. Crea una clase Gato (gato.js), y a partir de ella crea tantos gatos como quiera el usuario. 
Para ello se parte de una ventana (main.js) con un botón "Crea lindo gatito"

Cada gato tendrá 
- un nombre
- una fecha de nacimiento
- una raza 
- un peso (1-15).
- Cada vez que se cree un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
- El usuario podrá averiguar la edad del gato partiendo de un evento (un click sobre la imagen, un botón edad...)

El comportamiento (ventanaGato.js) es el siguiente:
- Cuando el gato juega pierde peso
- Cuando el gato come gana peso
- El gato puede morir de inanición o por sobrepeso

Recuerda:
- Evita el uso de cajas de texto básicas: 
  - raza por select, 
  - peso numérico con min y max, 
  - fecha con min y max (el día de hoy)
- No se puede usar ni alert ni prompt
- Hazlo lo más dinámico posible. (opcional)
- Utiliza la sintaxis de clases de ES2015+: con class y sin .prototype.

Recuerda que debes usar:

- set para el setter del peso
- get para el getter del peso
- \# para los miembros privados
- static para las constantes de clase

De interés:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
