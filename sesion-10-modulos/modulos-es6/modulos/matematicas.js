//exportaremos de distinta manera agregando el "export" al inicio de la función

export function suma(a, b) {
    return a + b//arreglar
}

export function multiplica(a, b) {
    return a * b
}

export function eleva(a, b) {
    return a ** b
}

export function factorial(a) {
    //Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

//Tambien podemos exportar const(constantes)
export const nombre = "matematicas"