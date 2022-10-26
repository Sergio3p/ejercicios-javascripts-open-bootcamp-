//Trabajando con objetos
const obj = {
    id: 4,
    nombre: "Sergio",
    apellido: "Pacheco",
    isDeveloper: true,
    peliculas_favoritas: ["Titanes del Pacifico", "Cars"],
    "4-juegos": [1, 2, 3, 4] //Para definir nombres raros, se recomienda usar comillas simples o dobles
}
console.log(obj.id)
console.log(obj["4-juegos"])

//Definir una propiedad con variables. Acceder a propiedades a traves de variables
const prop = "isDeveloper"
console.log(obj[prop])

//Como replicar un objeto
const obj2 = obj;

console.log(obj2)

obj2.nombre = "Alejandro"
console.log(obj2.nombre)
//Esta cambia con los objetos y no con los valores primitivos.
console.log(obj.nombre)

let val1 = 4
let val2 = val1
val2 = 6

console.log(val1)
console.log(val2)

// Hay muchos errores y se pueden resolver utilizando estos metodos (IMPORTANTE TENERLO EN CUENTA)

const obj3 ={ ...obj }
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Pancracio"

console.log(obj.nombre)
console.log(obj3.nombre)

//Cómo ordenar listas de objetos en función de una propiedad (MUY UTILIZADO E IMPORTANTE)

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939 },
    {titulo: "Titanic", anyo: 1997 },
    {titulo: "Moana", anyo: 2016 },
    {titulo: "Titanes del Pacifico", anyo: 2013 },
]

console.log(listaPeliculas)
//.sort -> Muta el valor de la lista original
listaPeliculas.sort((a, b) => a.anyo - b.anyo) //Esta formula sirve para ordenar de menor a mayor las fechas, numeros o listas.(anyo - titulo - o cualquier cosa que se encuentre en la funcion, se reemplaza aca)

