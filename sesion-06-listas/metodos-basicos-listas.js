// Cómo trabajar con listas (arrays, arreglos, vectores,...)
let var1 = {id: false};
let array = [1, 'hola', false, {id: 5}, null, undefined, {id: false}];

console.log(array)

// Acceder a los valores de un array a través de su posición (se accede con los corchetes)
//array[indice] --> 0, 1, 2, 3, 4, 5, ...
console.log(array[0])
console.log(array[1])
console.log(array[3])

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() --> Mutan el valor de nuestro array (lo cambiara)
// Para poner Valores al final --> Push
array.push("final", 45)
console.log(array)

//Si queremos introducir Valores al principio --> Unshift
array.unshift("inicio", 3, 2)
console.log(array)

//Métodos para eliminar valores en nuestros arrays
//.pop() .shift() --> Mutan el valor del array
array2 = [1, 3, "hola", false]
//Valores al final --> pop
array2.pop()
console.log(array2)

// Valores al principio --> shift
array2.shift()
console.log(array2)

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5]

// Eliminar valores --> .splice(indice, numValoresAEliminar)
array3.splice(2, 1)
console.log(array3)

// Añadir valores --> .splice(indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array3)

//Modificar valores --> .splice(indice, 1, valores)

array3.splice(2, 1, 3)
console.log(array3)