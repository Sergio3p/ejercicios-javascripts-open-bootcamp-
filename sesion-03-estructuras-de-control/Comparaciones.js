//Comparaciones

//Igualdad

if (5 == 5) {
    console.log("5 es igual a 5")
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

// == sólo compara el valor
//=== compara el valor y el tipo
let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

if (a == b) {
    console.log("a es igual a b - Débil")
}

if (a === b) {
    console.log("a es igual a b - Fuerte")
}

//comparación de desigualdad(3 tipos de desigualdades[menores, mayores y 
//las que no son iguales.]):

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Débil")   
}
//Estudiar bien este concepto (FACIL)
if (c !== d) {
    console.log("c es diferente a d - Fuerte ")
}

//mayores y menores:
//comparaciones mayor que y menor que:
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")
}
if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}