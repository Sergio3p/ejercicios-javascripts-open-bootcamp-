// .sort() --> MODIICA EL ARRAY
const array = [2, 5, 6, 7, 10, 0, 9]

console.log(array)

//Esta función esta obligado a utilizar return
array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if(a > b) {
        return +1
    } else { // a === b
        return 0
    }
})

console.log(array)

//Ordenar únicamente arras numéricos
const arrayNumerico = [4, 2, 5, 7, 91, 124, 100]

array.sort((a, b) => b - a)

console.log(arrayNumerico)

// Interesante en array de objetos

const listaObjetos = [
    {nombre: "Sergio", edad: 35},
    {nombre: "Alejandro", edad: 23},
    {nombre: "Carlos", edad: 40},
    {nombre: "Lucía", edad: 16},
    {nombre: "Martina", edad: 22},
]
// Ordenar de menor a mayor

/*listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
}) */

//Forma mas resumida

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)