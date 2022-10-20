// Bucles For: Son los bucles mas utilizados en todos los tipos de lenguaje. ej:

/*for (inicializacion; condicion;actualizacion) */
//ej:
//la actualización se puede abreviar un poco más. ej:
//i = i + 1
//i + = 1
//i ++
for (let i = 0; i < 10; i += 4) {
    // esto es el bucle
    console.log(i)
}

//2do ejemplo:

let lista = [1, 4, 6, 2, 3, 12, 30, 5, 10];
for (let i = 0; i < lista.length; i ++){
    console.log(lista[i] * 2)
}

//este for se usa de manera mas especifica.
//estructura for...of:
for (let valor of lista) {
    console.log(valor)
}

//estructura forEach
//funcion flecha (forma mas eficiente)
lista.forEach(valor => {
    console.log(valor)
})

//for in
let persona = {
    nombre: "Sergio",
    apellido: "Pacheco",
    edad: 20,
    isDeveloper: false
}

let prop= "edad";
console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])

}