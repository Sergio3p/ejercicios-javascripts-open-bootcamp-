// .some() --> Este devolvera un true si algun elemento cumple la funcion
const array = [3, 5, 7, 9, 234, 3468, 345094, -3, -1]

const res = array.some(valor => valor < -0)

console.log(res)

const existe = array.some(valor => valor === 9)

console.log(existe)

const listaObjetos = [
    {nombre: "Sergio", edad: 35},
    {nombre: "Alejandro", edad: 23},
    {nombre: "Carlos", edad: 40},
    {nombre: "Lucía", edad: 16},
    {nombre: "Martina", edad: 22},
]

const existetito = listaObjetos.some(persona => persona.nombre === "tito")

console.log(existetito)

//Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Sergio"
console.log(str[0])

//Método .from
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

//Vamos a obtener todas las listas con una funcion
//Método .keys

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)