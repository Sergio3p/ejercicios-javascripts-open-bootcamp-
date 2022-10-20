// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
//slice(). Ej:

let slice_str = str.slice(5, 10)
console.log(slice_str)

//substring(). Ej:

let substring_str = str.substring(5, 10) 
console.log(substring_str)

//substr ()[Menos utilizada]. Ej:

let substr_str = str.substr(5,10)
console.log(substr_str)

//Reemplazar parte del contenido de una cadena de texto
//Se utiliza para reeemplazar las palabras de una cadena de texto
let cadena = "Hola mi nombre es Sergio"
console.log(cadena)
//Al utilizar strings sólo reemplaza la primera instancia
cadena.replace(cadena.replace('Sergio', 'Alejandro'))

let texto_largo = "Hay veces que en la vida encontramos una amistad especial, alguien que cambie nuestra vida con solo ser parte de ella, alguien que nos hace ver que estamos vivos"

//el metodo "replace" funciona solo con la primera palabra que querramos cambiar
console.log(texto_largo.replace('que', 'de'))

//Al utilizar la expresión regular /g (global), reemplaza todas las instancias. Ej:
console.log(texto_largo.replace(/que/g, '5'))

