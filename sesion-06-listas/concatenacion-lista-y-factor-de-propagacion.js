// Cómo unir dos listas
//metodos --> .concat(lista2)

const lista1 = ["hola", 1, 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2))
//No se modifican los valores de las listas
console.log(lista1)

// De esta manera si se pueden unir los valores de la lista 1 y la lista 2
const lista3 = lista1.concat(lista2)
console.log(lista3)

// Otra forma seria asi:
// Cómo unir dos listas con el factor de propagación
console.log(...lista3)
// Los tres puntitos (...) se los conocen como factor de propagación, se utilizan en listas y objetos. Es importante entenderlo bien.
const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2]
// Se obtendra una lista de dos elementos por dentro de uno, por separado
console.log(lista5)

