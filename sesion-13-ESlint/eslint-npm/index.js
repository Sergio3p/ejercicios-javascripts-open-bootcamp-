//Este es el archivo que vamos a utilizar

const nombre = "Sergio"

//En esta línea quiero tener comillas simples (quiero que me desactives la regla de las comillas dobles)

//Tenemos algunas opciones para aplicar esto.

//Una de esas seria eliminar slint del todo:

/* eslint-disable */

const persona2 = 'Maria'

/* eslint-enable */ //Para volver a activar el eslint

// Otra forma seria colocando el comando dentro de la misma linea

const nuevoString = 'Esto es un nuevo string'; //eslint-disable-line

//Otra forma seria así:

/* eslint-disable-next-line indent */
  const string2 = "Más strings"

console.log("hola")

const persona5 = "martin"

const persona3 = "maria"

console.log(8)

//podemos arreglar los errores agregando "lint-fix": "eslint --fix ." en el package.json.