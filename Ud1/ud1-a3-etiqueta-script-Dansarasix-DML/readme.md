# Práctica 2: Preguntas sobre la etiqueta script

### Daniel Marín López

1. Ventajas de incorporar el script desde un fichero externo frente a hacerlo en línea (código javascript directamente en el fichero HTML).
1. Atributos aplicables a la etiqueta script.
1. Atributos por defecto.
1. Atributos booleanos. Qué implican.
1. Sitio recomendado para colocar la etiqueta script.
1. Etiqueta noscript: utilidad, atributos y dónde colocar.

**1. Ventajas de incorporar el script desde un fichero externo frente a hacerlo en línea.**

Una de las mayores ventajas es que tener el fichero de forma externa es que simplifica el HTML y separa el código Javascript de este, de esta forma el código no tienes que tenerlo en el mismo fichero y se hace más cómoda la forma de trabajar que tenerlo todo junto (incluso mezclado con el HTML).

**2. Atributos aplicables a la etiqueta script.**

Algunos de los atributos que se pueden aplicar a la etiqueta script son:

- **type**: Tipo del archivo.
- **src**: Dirección del archivo.
- **async**: Sirve para seguir cargando el HTML mientras se descarga el archivo indicado en ***src***.
- **defer**: Sirve para seguir cargando el HTML mientras se descarga el archivo indicado en ***src*** y cargarlo una vez ha terminado de cargarse el HTML.

**3. Atributos por defecto.**

El atributo ***text*** tiene por defecto entender tanto los archivos de texto como los de Javascript.

**4. Atributos booleanos. Qué implican.**

Los atributos booleanos vienen a arreglar el problema principal de la etiqueta script, y es que esta detiene el proceso de carga del documento HTML. Para evitar eso tenemos los atributos mencionados anteriormente:

- **async**: Sirve para seguir cargando el HTML mientras se descarga el archivo indicado en ***src***.
- **defer**: Sirve para seguir cargando el HTML mientras se descarga el archivo indicado en ***src*** y cargarlo una vez ha terminado de cargarse el HTML.

**5. Sitio recomendado para colocar la etiqueta script.**

El mejor sitio para poner la etiqueta script es en el ***head*** del HTML.

**6. Etiqueta noscript: utilidad, atributos y dónde colocar.**

La etiqueta **noscript** se utiliza cuando el usuario ha desactivado la lectura de scripts en su navegador, por ende algunas páginas que necesitan de código como Javascript no se cargaría y por lo tanto la página no funcionaria muy bien.

Cuando el navegador tiene desactivados los scripts, la etiqueta **noscript** saltará indicando al usuario que active los scripts en esa página.

Esta etiqueta carece de atributos y se puede colocar o en el head o en el body dependiendo del caso.

- Si se coloca en el **head**, cargará de forma alternativa los elementos **link**, **meta** y **style** en el navegador.
- Si se coloca en el **body**, se usará para indicar al usuario que los scripts no están activados y que debe activarlos.