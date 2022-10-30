//La depuración nos permite simular en algún entorno. Ej: Chrome, node.js, etc.
//Break point: Son los puntitos rojos que podremos encontrar en el costado de los numeros que encadenan a todas las funciones. Tambien se los conocen como puntos de ruptura. Se utilizan para saber que esta pasando en cada función o variable que hayamos construido. Esto significa que (coloando los puntos al costado de la funcion o variable que hayamos colocado) al tocar el boton de "ejecutar y depurar"
const persona = {
    nombre: "Sergio",
    edad: 21
}

console.log(persona)

function obtenDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)

//La inspección nos servira para evaluar expresiones
function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]//Aprender y familiarizarse con esta sintaxis
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)