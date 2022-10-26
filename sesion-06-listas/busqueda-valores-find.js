// Iterar los valores de una lista (Como acceder a los valores de una lista en forma unitaria)
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (más eficiente y moderna) --> .forEach()
let suma = 0;
const arrayNums = [3, 6, 77, 2, 3, 100, 20]

arrayNums.forEach( valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Búsqueda de un valor dentro de una lista --> .find()
// Quiero encontrar el elemento 90

const variable = array.find(valor => {
    if (valor === 2) {
        return true
    }
})

console.log(variable)

//otro ej:

const listaObjetos = [
    {nombre: "Sergio", edad: 35},
    {nombre: "Alejandro", edad: 23},
    {nombre: "Carlos", edad: 40},
    {nombre: "Lucía", edad: 16},
    {nombre: "Martina", edad: 22},
]

// Forma menos simplificada

/*const objeto = listaObjetos.find(o => {
    if (o.nombre === "Carlos") {
        return true
    }
})*/

// Forma más simplificada

/*const objeto = listaObjetos.find(o => {
      return o.nombre === "Carlos"
})*/

// Forma mucho más simplificada
const objeto = listaObjetos.find(o => o.nombre === "Carlos")

console.log(objeto.edad)

// Otra forma mucho más sensilla y simplificada
const { edad } = listaObjetos.find(o => o.nombre === "Sergio")
console.log(edad)

