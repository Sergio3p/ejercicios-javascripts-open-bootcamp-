//Métodos de cadenas de texto (parte 3)
//https://regexr.com (esta pagina te ayudara con las expresiones regulares a mayor profundidad)

//match: Cumple la función de utilizar una expresión regular dentro de el texto que nosotros le estemos pasando. Ej:
let texto_largo = "Hay veces que en la vida encontramos una amistad especial, alguien que cambie nuestra vida con solo ser parte de ella, alguien que nos hace ver que estamos vivos"

console.log(texto_largo.match(/que/g))

//Este metodo se utiliza para saber si incluye la palabra que buscamos ("includes"). Ej:
//existe la palabra dentro del texto?
console.log(texto_largo.includes("cambio"))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Hay veces que"))

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("estamos vivos"))