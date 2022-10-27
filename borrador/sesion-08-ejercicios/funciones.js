function sinParametros() {//Nada entre parentesis(Sin parametros)
    return true
}

function miAsinc() {
    return setTimeout (() => console.log("Hola soy una promesa"),5000)
}//Repasar setTimeout

function* indicePares() {
    let id = 0
    while (true) {
        yield id += 2
    }
}

//Para resumir la funcion

const ind = indicePares();

console.log(ind.next().value)
console.log(ind.next().value)
console.log(ind.next().value)
console.log(ind.next().value)

