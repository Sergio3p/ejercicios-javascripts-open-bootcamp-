//Formas de importar/exportar módulos
//1. CommonJS - require()
//2.Import ES6 - import(El mas moderno)

const moduloMatematicas = require("./modulos/matematicas.js")
//const factorial = moduloMatematicas.factorial;
//const { factorial, suma } = moduloMatematicas;//Manera mas resumida
//console.log(moduloMatematicas)*/
const { factorial, suma } = require("./modulos/matematicas.js")// el metodo mas facil y resumido para utilizar

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

//console.log(module)
