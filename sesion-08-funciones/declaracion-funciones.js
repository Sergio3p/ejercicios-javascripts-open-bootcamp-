//Qué son las funciones, cómo se declaran y cómo se utilizan.
//Las funciones son bloques de codigos que se ejecutan con un fin especifico.


/*saludar(2, "Hola", false)

function saludar(parametro_1, parametro_2, parametro_3) {
    console.log("hola")
} */

//ej:
//saludar("Sergio")
const nom = "Alejandro"
saludar(nom)

function saludar(nombre) {
    console.log(nom)
    console.log(`Hola ${nombre}`)
}

//
//Al usar valores primitivos con str el nombre_2 puede ser cambiado dentro de una funcion
let nombre_2 = "Juan"
console.log(nombre_2)
despedir(nombre_2)


function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

//Hay que tener cuidado con las funciones, ya que hay que aprender a diferenciar una variable de valor con una variable de preferencia
let persona ={ nombre: "Sergio", apellido: "Pacheco"}

saludarPersona(persona)

console.log(persona)
function saludarPersona(objeto) {
    objeto.apellido = "Coria"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()
//Como dejar un valor por defecto
function imprimeNumero(numero = 7) {//Parámetro por defecto --> Se utiliza para que no nos de un undefine 
    console.log(numero)
}
imprimeNumero()

//

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 2, 5, "adiós", {id:9})

//

function suma(...nums) {
    console.log(typeof nums)
    console.log(nums[3])
    console.log(...nums)//Como un array
   return (nums.reduce((a,b) => a + b))
}
//Si queremos que una funcion nos devuelva algo, tiene que tener una sintaxis entendible, en este caso el "return"
const s = suma(1, 34, 5, 604, 32)

console.log(s)

//
//Se puede acceder a una variable dentro de una funcion, pero no podemos crear una variable dentro del ambito de una funcion
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    return a * b
}

console.log(multiplicar(4, 9))