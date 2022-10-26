//Cómo podemos comparar listas
// .every() --> Comprueba si todos los componentes de una lista cumple una condición
const array = [4, 6, 3, 3345, 503, 21, 43, -123, -35, 2, -35]

//callbacks. ej: (valor => {})
/* const resultado = array.every(valor => {
    if (valor > 0) {
        return true
    } else {
        false
    }
}) */
// Forma mas resumida
const resultado = array.every(valor => valor > 0)
console.log(resultado)

// Comparación de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
//Asi no se comparan las listas, ya que siempre dara false
console.log(ar1 == ar2)

//Mejor metodo (crear una funcion)

/*const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => {
        if (valor === array_2[i]) return true
        return false
    })
} */

//forma mas resumida

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
} 

console.log(compararArrays(ar1, ar2))

const ar3 = [1, 2, 3, 5]

console.log(compararArrays(ar1, ar3))