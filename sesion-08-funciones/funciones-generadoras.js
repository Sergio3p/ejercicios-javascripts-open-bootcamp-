//Funciones generadoras

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id //El yield es una especie de return, solo que en lugar de salir directamente de la funcion, se va a quedar esperando hasta que se vuelva a llamar
    }
}
//Cada vez que nosotros llamemos a esta función se va a ir generando un id incremental 

//Guardar esta función dentro de una constante:
const gen = generaId();

console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
