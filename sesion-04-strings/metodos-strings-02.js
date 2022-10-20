//Métodos de cadenas de texto (parte 2)
let imput = "SAGITArio"
let db = "sagitario"

console.log(imput === db)

//toLowerCase() - toUpperCase() [Se utiliza para que las dos cadenas nos den igual]
console.log(imput.toLowerCase())
console.log(imput.toUpperCase())
console.log(imput.toLocaleLowerCase())
console.log(imput.toLowerCase() === db.toLowerCase())
console.log(imput.toUpperCase() === db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

//1era opción (Mejor metodo):

console.log(str_1.concat(" ", str_2))

//2da opción:

console.log(str_1 + " " + str_2)

//3era opción:

console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final:

let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)

//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posición
let str_4= "Hola soy el string número 4"

//1era opción:
console.log(str_4.charAt(3))

//2da opción:
console.log(str_4[3])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5= "Hola soy Sergio y me gusta la programación. min nombre es Sergio y mi apellido es Pacheco"

//1er Metodo (Nos devolvera la primera instancia):
console.log(str_5.indexOf("Sergio"))
console.log(str_5.charAt(9))

//2do Metodo (Nos devolvera la segunda estancia):

console.log(str_5.lastIndexOf("Sergio"))
