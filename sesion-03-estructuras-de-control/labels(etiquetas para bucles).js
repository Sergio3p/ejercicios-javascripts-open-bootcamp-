//break y continue
//labels(etiquetas): Nos servira para mejorar el control del break y continue

//ejemplo sin etiquetas:

let unidades = 0
let decenas = 0
//cuidado con while(true) puede entrar en un bucle infinito
/*while (true) {
     while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++ // o tambien podemos usar "unidades = unidades + 1"
        if (unidades === 10) {
            unidades = 0
            break 
        } 
    }
    decenas++
    if (decenas === 2){
        console.log(`El número actual es: ${decenas}${unidades}`)
        break 
    }
} */

//ejemplo con etiquetas:

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++ // o tambien podemos usar "unidades = unidades + 1"
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        } 
        if (decenas === 2){
            console.log(`El número actual es: ${decenas}${unidades}`)
            break bucleDecenas
        }
    }
    decenas++
}
console.log("Ya hemos terminado")