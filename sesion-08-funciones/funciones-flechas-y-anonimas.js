//Funciones tipo flecha - funciones anónimas

const array = [1, 2, 5, 8, 9, 23, 56]

//Potemos tener 3 parametros distintos
//const array2 = array.map(function(valor, indice, arrayOriginal))

//Esta forma de utilizar .map esta bien, pero tambien podemos utilizar las funciones tipo flechas (las mas comunes)

/*const array2 = array.map(function(valor) {
    return valor * 2
})*/

//manera mas resumida con flechas
const array2 = array.map((valor) => valor * 2) //Esta es una función anónima porque esta funcion no esta asignada a ningún nombre.
console.log(array2)

//Para definir una función tipo flecha se tiene que guardar dentro de una variable. Puede ser un "var", "let", "const" (Lo mejor seria guardarlo en una constante --> "const")

// const dobleDelValor = valor => {
    // return valor * 2 
// }
//tambien se puede hacer de este modo y dara lo mismo, es exactamente igual

//console.log(dobleDelValor(6))

//Las funciones tipo flecha NO dejan acceder desde cualquier parte del script y realizar el console.log, de esta forma se tiene que hacer primero la funcion y despues realizar el console.log (abajo de esta funcion obviamente)
const dobleDelValor = valor => valor * 2

function doble(valor) {
    return valor * 2
}
//Lo mas recomendable es definir las funciones y variables arriba de todo el script y despues controlarlas
console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)
console.log(array3)